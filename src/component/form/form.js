import InputContainer from "../input-container/input-container";
import RadioContainer from "../radio-container/radio-container";
function Form() {
    return (
        <form action="">
            <button className="start-create">Create new card?</button>
            <div className="inputs">
                <InputContainer label="Введіть назву продукту!" type="text" />
                <InputContainer label="Введіть Характеристики продукту!" type="text" />
                <InputContainer label="Введіть Характеристики продукту!" type="text" />
                <InputContainer label="Введіть Характеристики продукту!" type="text" />
                <InputContainer label="Введіть лінк на фото продукту!" type="text" />
                <InputContainer label="Початкова ціна!" type="number" />
                <InputContainer label="Остаточна ціна!" type="number" />

                <RadioContainer label="Новинка?" className="radio-new" id="is-new" />
                <RadioContainer label="Топ продаж?" className="radio-top" id="its-top" />
                <RadioContainer label="Закінчуеться!" className="radio-warning" id="its-warning" />
                <RadioContainer label="Нема в наявності!" className="radio-available" id="its-available" />
            </div>
            <input className="submit" type="submit" value="Create"/>
        </form>
    );
}

export default Form;