import { useDispatch } from "react-redux";
import { fetchUser } from "../../features/dataSlice/dataSlice";

const SearchBar = () => {
    let text, domain, gender, available;
    const dispatch = useDispatch()
    const searchDatas = (e) => {
        e.preventDefault()
        let form = document.getElementsByName('form')[0];
        text = form.text.value;
        domain = form.domain.value;
        gender = form.gender.value;
        available = form.available.value
        dispatch(fetchUser({ domain: domain, gender: gender, available: available, text: text, page: 1 }))
    }

    const seachOnchange = (e) => {
        e.preventDefault()
        let form = document.getElementsByName('form')[0];
        text = form.text.value;
        domain = form.domain.value;
        gender = form.gender.value;
        available = form.available.value
        // if (domain == "null" || gender || "null" || available || "null") 

            dispatch(fetchUser({ domain: domain, gender: gender, available: available, text: text, page: 1 }))
    }
    return (
        <div className="h-aut w-full p-1 sm:p-3">
            <form onChange={seachOnchange} onSubmit={searchDatas} name="form">
                <input type="text" name="text" placeholder="Search users" className="input input-bordered w-full" />
                <div className="p-1 grid gap-2 items-center grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3">
                    <fieldset className='py-2 felx flex-col'>
                        <label className="font-semibold p-1">Filters</label>
                        <label>Domain</label>
                        <select name='domain' className="select select-bordered w-full max-w-md">
                            <option disabled selected value={"null"}>choose domain</option>
                            <option value={'Sales'}>Sales</option>
                            <option value={'Finance'}>Finance</option>
                            <option value={'Marketing'}>Marketing</option>
                            <option value={'IT'}>IT</option>
                            <option value={'Management'}>Management</option>
                            <option value={'UI Designing'}>UI Designing</option>
                            <option value={'Business Development'}>Business Development</option>
                        </select>
                    </fieldset>
                    <fieldset className='py-2 felx flex-col'>
                        <label>Gender</label>
                        <select name='gender' className="select select-bordered w-full max-w-md">
                            <option disabled selected value={"null"}>Choose Gender</option>
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                            <option value={'Agender'}>Agender</option>
                            <option value={'Bigender'}>Bigender</option>
                            <option value={'Polygender'}>Polygender</option>
                            <option value={'Non-binary'}>Non-binary</option>
                            <option value={'Genderfluid'}>Genderfluid</option>
                            <option value={'Genderqueer'}>Genderqueer</option>

                        </select>
                    </fieldset>
                    <fieldset className='py-2 flex flex-col'>
                        <label>Availebility</label>
                        <select className="select select-bordered col-span-1" name="available">
                            <option disabled selected value={"null"}>choose availability</option>
                            <option value={"true"}> Available</option>
                            <option value={"false"}>Unavailable</option>
                        </select>
                    </fieldset>

                </div>
            </form>
        </div>
    );
};

export default SearchBar;