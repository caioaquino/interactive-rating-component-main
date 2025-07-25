const listItemsLabels = document.querySelectorAll('.rating-container__list__item label');
const submitButton = document.querySelector('#confirm-rating-button');


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const checkedInput= document.querySelector('input[name="rating"]:checked').attributes['value'].value;
    window.location.href = `./thank-you.html?rating=${checkedInput}`;
});
listItemsLabels.forEach((label) => {
    label.addEventListener('keydown',onLabelKeyDown);
})

function onLabelKeyDown(event){
    if(event.key == "Enter"){
        const labelId = event.target.attributes['aria-label'].value;
        document.querySelector(`input[name="rating"][value="${labelId}"]`).checked = true;
    }
}