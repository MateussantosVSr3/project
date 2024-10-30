export const Slider = () => {
    const thumbs = document.querySelectorAll('.thumb li');
    const infoSlider = document.querySelectorAll('.info-slider');
    const imgSlider = document.querySelectorAll('.img-slider');
    const items = document.querySelectorAll('.item');

    let index = 0;

    thumbs.forEach((thumb, ind) => {
        thumb.addEventListener('click', () => {
            index = ind; 

            infoSlider.forEach(slide => {
                slide.style.transform = `translateY(${index * -100}%)`;
            });
            imgSlider.forEach(slide => {
                slide.style.transform = `translateX(${index * -100}%)`;
            });

            document.querySelector('.item.active').classList.remove('active');
            items[index].classList.add('active');

            document.querySelector('.thumb li.selected').classList.remove('selected');
            thumb.classList.add('selected');
        });
    });
};

export default Slider;