// Meditatsiya mashqi uchun funksiya
function showExercise() {
    const exerciseContent = document.getElementById('exercise-content');
    exerciseContent.innerHTML = `
        <h3>Tinchlanish meditatsiyasi</h3>
        <p>Ko'zingizni yuming, chuqur nafas oling va tinchlanishga harakat qiling. Har nafasda xotirjamlikni his qiling.</p>
    `;
}

// Aloqa formasini yuborish
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    alert(`Rahmat, ${name}! Xabaringiz qabul qilindi.`);
});
