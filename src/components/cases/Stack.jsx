import s from '@/styles/cases/Stack.module.css';
import ImageSlider from './ImageSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Stack = ({ cases }) => {
  return (
    <section className={`container main_container`}>
      <div className={s.stack_header}>
        <h2>Technology stack</h2>
        <div className={s.slider_header}>
          <h3>What we have done</h3>
          <div className={s.slider_btn}>
            <span>Mobile</span>
            <div className={s.slider_button}>
              <div />
            </div>
            <p>Desktop</p>
          </div>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.stacks}>
          {cases.stacks.stack.map((stack, index) => (
            <p className={stack.status === 'active' ? s.active_stacks : ''} key={index}>{stack.name}</p>
          ))}
        </div>

        {cases.sliderImages && <ImageSlider cases={cases} />}
        <div></div>
      </div>
    </section>
  );
};

export default Stack;
