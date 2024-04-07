import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FcSearch } from "react-icons/fc";

const SearchBar = ({onFormSubmit}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.currentTarget.elements.query.value === "") {
            
            toast.error('Here is your toast.')
            return;
        }
        const value = e.currentTarget.elements.query.value.trim();
        onFormSubmit(value);
  }
  
    return (
    <header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>  
    <input
        type="text"
        name="query"
      // autocomplete="off"
            // autofocus
            className={css.search}
      placeholder="Search images and photos"
    />
    <button type="submit" className={css.button}><FcSearch /></button>
    <Toaster />           
  </form>
</header>
  )
}

export default SearchBar


// onClick={notify}
