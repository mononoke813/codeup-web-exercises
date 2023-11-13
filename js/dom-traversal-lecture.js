/* DOM Traversal */
/* NODE METHODS FOR TRAVERSAL
 * - querySelector: crawl down the DOM tree, returns first match
 * - querySelectorAll: crawl down the DOM tree, returns all matches
 * - closest: crawl up the DOM tree, returns first match
 * - nextElementSibling: crawl sideways the DOM tree, returns following element
 * - previousElementSibling: crawl sideways the DOM tree, returns previous element
 * - parentElement: crawl up the DOM tree, returns parent element
 * - children: crawl down the DOM tree, returns all children elements
 * - firstElementChild: crawl down the DOM tree, returns first child element
 * - lastElementChild: crawl down the DOM tree, returns last child element
 */

// MAIN
(() => {
    const sliderNextBtns = document.querySelectorAll('[data-next]');
    const sliderPrevBtns = document.querySelectorAll('[data-prev]');

    for (let sliderNextBtn of sliderNextBtns) {
        sliderNextBtn.addEventListener('click', e => {
            const sliderId = sliderNextBtn.getAttribute("data-next");
            const slider = document.querySelector(`[data-slider="${sliderId}"]`);
            const current = document.querySelector([data - slide].active);
            const next = current.nextElementSibling;

            if (next) {
                current.classList.remove("active");
                next.classList.add("active");
            } else {
                const first = current.closest(".row").querySelector("[data-slide]");
                current.classList.remove("active");
                first.classList.add("active");
            }
        })
    }


    const highlightBtnNext = document.querySelector("#highlightNext");
    const highlightBtnPrev = document.querySelector("#highlightPrev");

    highlightBtnNext.addEventListener('click', e => {
        const current = document.querySelector(".box.active");
        const next = current.nextElementSibling;

        if (next) {
            current.classList.remove("active");
            next.classList.add("active");
        } else {
            const first = current.closest(".row").querySelector(".box");
            current.classList.remove("active");
            first.classList.add("active");
        }

    });

    highlightBtnPrev.addEventListener('click', e => {
        const current = document.querySelector(".box.active");
        const prev = current.previousElementSibling;

        if (prev) {
            current.classList.remove("active");
            prev.classList.add("active");
        } else {
            const last = current.closest(".row").querySelector(".box:last-child");
            current.classList.remove("active");
            last.classList.add("active");
        }
    });

})();