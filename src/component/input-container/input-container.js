import './input-conteiner.scss'
function InputContainer({ label, type }) {
    return (
        <div className="input-conteiner">
          <label>{label}
            <input type={type} name="" id=""/>
          </label>
          
        </div>
    );
}
export default InputContainer;