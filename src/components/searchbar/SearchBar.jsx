const SearchBar = () => {
    return (
        <div className="h-aut w-full p-1 sm:p-3">
            <form >
                <input type="text" placeholder="Search users" className="input input-bordered w-full" />
                <label className="font-semibold p-1">Filters</label>
                <fieldset className="p-1 grid gap-2 items-center grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3">
                    <select className="select select-bordered col-span-1">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select select-bordered col-span-1">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select select-bordered col-span-1">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </fieldset>
            </form>
        </div>
    );
};

export default SearchBar;