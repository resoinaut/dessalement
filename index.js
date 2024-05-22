
// very bad code bc im low on time...

// METHOD 1

const method1Selection1 = document.getElementById("method1-selection1");
const method1Selection2 = document.getElementById("method1-selection2");
const method1Selection3 = document.getElementById("method1-selection3");
const method1Selection4 = document.getElementById("method1-selection4");
const method1Selection5 = document.getElementById("method1-selection5");
const method1Selection6 = document.getElementById("method1-selection6");

const method1Text1 = document.getElementById("method1-text1");
const method1Text2 = document.getElementById("method1-text2");
const method1Text3 = document.getElementById("method1-text3");
const method1Text4 = document.getElementById("method1-text4");
const method1Text5 = document.getElementById("method1-text5");
const method1Text6 = document.getElementById("method1-text6");

const method1Image1 = document.getElementById("method1-image1");
const method1Image2 = document.getElementById("method1-image2");
const method1Image3 = document.getElementById("method1-image3");
const method1Image4 = document.getElementById("method1-image4");
const method1Image5 = document.getElementById("method1-image5");
const method1Image6 = document.getElementById("method1-image6");

function method1RemoveActive() {
	[
		method1Selection1, method1Selection2, method1Selection3, method1Selection4, method1Selection5, method1Selection6,
		method1Text1, method1Text2, method1Text3, method1Text4, method1Text5, method1Text6,
		method1Image1, method1Image2, method1Image3, method1Image4, method1Image5, method1Image6,
	].forEach(el => el.classList.remove("active"));
}

method1Selection1.addEventListener("click", () => {
	method1RemoveActive();

	method1Image1.classList.add("active");
	method1Selection1.classList.add("active");
	method1Text1.classList.add("active");
});

method1Selection2.addEventListener("click", () => {
	method1RemoveActive();

	method1Image2.classList.add("active");
	method1Selection2.classList.add("active");
	method1Text2.classList.add("active");
});

method1Selection3.addEventListener("click", () => {
	method1RemoveActive();

	method1Image3.classList.add("active");
	method1Selection3.classList.add("active");
	method1Text3.classList.add("active");
});

method1Selection4.addEventListener("click", () => {
	method1RemoveActive();

	method1Image4.classList.add("active");
	method1Selection4.classList.add("active");
	method1Text4.classList.add("active");
});

method1Selection5.addEventListener("click", () => {
	method1RemoveActive();

	method1Image5.classList.add("active");
	method1Selection5.classList.add("active");
	method1Text5.classList.add("active");
});

method1Selection6.addEventListener("click", () => {
	method1RemoveActive();

	method1Image6.classList.add("active");
	method1Selection6.classList.add("active");
	method1Text6.classList.add("active");
});

// METHOD 2

const method2Selection1 = document.getElementById("method2-selection1");
const method2Selection2 = document.getElementById("method2-selection2");
const method2Selection3 = document.getElementById("method2-selection3");
const method2Selection4 = document.getElementById("method2-selection4");

const method2Information1 = document.getElementById("method2-information1");
const method2Information2 = document.getElementById("method2-information2");
const method2Information3 = document.getElementById("method2-information3");
const method2Information4 = document.getElementById("method2-information4");

function method2RemoveActive() {
	[
		method2Selection1, method2Selection2, method2Selection3, method2Selection4,
		method2Information1, method2Information2, method2Information3, method2Information4,
	].forEach(el => el.classList.remove("active"));
}

method2Selection1.addEventListener("click", () => {
	method2RemoveActive();

	method2Selection1.classList.add("active");
	method2Information1.classList.add("active");
});

method2Selection2.addEventListener("click", () => {
	method2RemoveActive();

	method2Selection2.classList.add("active");
	method2Information2.classList.add("active");
});

method2Selection3.addEventListener("click", () => {
	method2RemoveActive();

	method2Selection3.classList.add("active");
	method2Information3.classList.add("active");
});

method2Selection4.addEventListener("click", () => {
	method2RemoveActive();

	method2Selection4.classList.add("active");
	method2Information4.classList.add("active");
});
