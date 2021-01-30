import React, {useState} from 'react';

export function CategorySelect (props) {
    const [selectedValue, setSelectedValue] = useState('Mathematik');
    function handleCategorySelect (event) {
        setSelectedValue(event.target.value);
        props.selectedCategory(event.target.value);
    }
    const selectOptions = props.categories.map((category, index) => {
        return <option key={`category-${index}`} value={category}>{category}</option>
    });
    return (
        <label> Kategorie wählen:
            <select name = {selectedValue} value = {selectedValue} onChange={ handleCategorySelect }>
                {selectOptions}
            </select>
        </label>
    );
}