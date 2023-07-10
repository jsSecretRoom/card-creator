
import './radio-container.scss'

function RadioContainer({ label, className, id }) {
    return (
      <div className="radio-conteiner">
        <label className="info-input" htmlFor="">{label}</label>
        <label className="swith">
          <input className={className} type="checkbox" name="" id={id} />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
export default RadioContainer;