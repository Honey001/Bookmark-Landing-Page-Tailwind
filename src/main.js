import "./style.css";

const contentArray = [
	{
		h2: "Bookmark in one click",
		p: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite site",
	},
	{
		h2: "  Intelligent search",
		p: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
	},
	{
		h2: "Share your bookmarks",
		p: " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
	},
];

const links = document.querySelectorAll(".display-link");
const imageContainer = document.querySelector(".feature-hero-img-container");
const images = imageContainer.querySelectorAll("img");
const navMenu = document.querySelector(".navbar-container");
const closeNavMenuButton = document.getElementById("closeMenu");
const navMenuButton = document.getElementById("openMenu");
const contentContainer = document.querySelector(
	".feature-img-content-container"
);
const activeClasses = ["border-be-4", "border-red-400"];

const displayNavMenu = () => {
	navMenu.classList.remove("hidden");
	document.body.classList.add("dimmed");
};

const closeNavMenu = () => {
	setTimeout(() => {
		navMenu.classList.add("hidden");
		document.body.classList.remove("dimmed");
	}, 100);
};

navMenuButton?.addEventListener("click", displayNavMenu);
closeNavMenuButton?.addEventListener("click", closeNavMenu);

links.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();

		links.forEach((l) => {
			l.classList.remove(...activeClasses);
		});

		link.classList.add(...activeClasses);
		const targetIndex = parseInt(link.getAttribute("data-index"), 10);

		images.forEach((fig, index) => {
			if (index === targetIndex) {
				fig.classList.remove("hidden");
			} else {
				fig.classList.add("hidden");
			}
		});

		const data = contentArray[targetIndex];
		const contentTitle = contentContainer.querySelector("h2");
		const contentPara = contentContainer.querySelector("p");

		if (data) {
			contentTitle.textContent = data.h2;
			contentPara.textContent = data.p;
		}
	});
});

// FORM
const myForm = document.getElementById("myform");
const email = myForm.querySelector("input[type='email']");
const emailInputCon = myForm.querySelector(".email-input-error-container");
const errorCon = emailInputCon.querySelector(".input-error-container");
const errorMsg = emailInputCon.querySelector(".email-error-message");
const errorImg = errorCon.querySelector("img");

email.addEventListener("input", () => {
	if (email.value.trim()) {
		errorMsg.classList.add("hidden");
		errorImg.classList.add("hidden");
		errorCon.classList.remove("border-2");
	}
});

myForm.addEventListener("submit", (evt) => {
	evt.preventDefault();
	let isTrue = true;
	const errorText = () => {
		errorMsg.classList.remove("hidden");
		errorImg.classList.remove("hidden");
	};
	const emailInput = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
	if (email.value.trim() === "") {
		errorText();
		isTrue = false;
	} else if (!emailInput.test(email.value.trim())) {
		errorText();
		isTrue = false;
	}
	if (isTrue) {
		errorMsg.classList.add("hidden");
		errorCon.classList.remove("border-2");
	} else {
		errorMsg.classList.remove("hidden");
		errorCon.classList.add("border-2");
		errorImg.classList.remove("hidden");
	}
});
