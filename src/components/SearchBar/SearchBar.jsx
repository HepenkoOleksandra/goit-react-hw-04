import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');

const SearchBar = ({onFormSubmit}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.currentTarget.elements.query.value === "") {
            
            toast.error('Here is your toast.')
            return;
        }
        const value = e.currentTarget.elements.query.value.trim();
        console.log(value);
        onFormSubmit(value);
  }
  
    return (
    <header>
  <form onSubmit={handleSubmit}>  
    <input
        type="text"
        name="query"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
    />
    <button type="submit" >Search</button>
    <Toaster />           
  </form>
</header>
  )
}

export default SearchBar


// onClick={notify}
