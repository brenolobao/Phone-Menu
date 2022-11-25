document.querySelector('.item1').addEventListener('click', function () {
    document.querySelector('.item1').classList.add('active');
    document.querySelector('.item2').classList.remove('active');
    document.querySelector('.item3').classList.remove('active');

});
document.querySelector('.item2').addEventListener('click', function () {
    document.querySelector('.item2').classList.add('active');
    document.querySelector('.item1').classList.remove('active');
    document.querySelector('.item3').classList.remove('active');
});
document.querySelector('.item3').addEventListener('click', function () {
    document.querySelector('.item3').classList.add('active');
    document.querySelector('.item2').classList.remove('active');
    document.querySelector('.item1').classList.remove('active');
});