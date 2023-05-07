import { Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
import { getFilter } from "redux/contacts/selectors";
import { StyledHeading, StyledInput } from "./Filter.styled";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const onFilter = event => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <>
            <StyledHeading as='h2'>Contacts</StyledHeading>
            <Text fontSize='xl'>Find contacts by name:</Text>
            <StyledInput
                size='sm'
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={filter.filter}
                onChange={onFilter}
                required
            />
        </>
    );
}

export default Filter;