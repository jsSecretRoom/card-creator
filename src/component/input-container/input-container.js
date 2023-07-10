import './input-conteiner.scss'
function InputContainer({ label, type }) {
    return (
        <div className="input-conteiner">
          <label htmlFor="">{label}</label>
          <input type={type} name="" id=""/>
        </div>
    );
}
export default InputContainer;