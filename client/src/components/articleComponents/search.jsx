import { FaSearch } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { Form, Link, useLoaderData } from "react-router-dom";

const search = () => {
  const { category } = useLoaderData()
  console.log(category)
  return (
    // search by title,filter  by category, range by readingtime,filter by newest,oldest,
    <Form className="grid gap-2 grid-cols-12  items-end">
      <label className="col-span-4 input  bg-transparent flex items-center gap-2 " style={{ borderBottom: '2px solid #13404f', borderRadius: '0px' }}>
        <input
          type="text"
          className="grow text-[var(--black-color)]"
          placeholder="Search article by title..."
          name="search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <select
        style={{ borderBottom: '2px solid #13404f', borderRadius: '0px' }}
        name="category"
        className="select bg-transparent  w-full max-w-xs text-[var(--primary)] col-span-3"
      >
        <option disabled selected>
          category
        </option>
        {category.map((tag) => {
          return <option key={tag}>{tag}</option>;
        })}
      </select>
      <select
        name="sort_by"
        className="select bg-transparent  w-full max-w-xs text-[var(--primary)] col-span-3"
        style={{ borderBottom: '2px solid #13404f', borderRadius: '0px' }}
      >
        <option disabled selected>
          sort by
        </option>
        <option>newest</option>
        <option>oldest</option>
        <option>most viewed</option>
      </select>
      <button
        type="submit"
        className=" btn btn-outline btn-[red] btn-sm"
      >
        <FaSearch className="text-[var(--primary)] text-6 hover:text-[var(--ternery)] size-5" />

      </button>
      <Link to="/articles" className="btn btn-outline btn-[red] btn-sm">
        <RxReset className="font-extrabold text-[var(--primary)] text-6 hover:text-[var(--ternery)] size-6" />
      </Link>
    </Form>
  );
}
export default search