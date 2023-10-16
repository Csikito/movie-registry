import React from "react";

const Modal = ({
  setModal,
  title,
  age,
  description,
  setTitle,
  setAge,
  setDescription,
  handleSubmit,
}) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10 "></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-dark text-black w-[400px]  py-5 px-3 z-20">
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div className="col-span-1">
            <label htmlFor="title" className="absolute -left-[9999px] ">
              Title
            </label>
            <input
              type="text"
              className="p-1 "
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="age" className="absolute -left-[9999px]">
              Age
            </label>
            <input
              type="number"
              className="p-1 w-[100px]"
              placeholder="Enter age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
              max="18"
              min="0"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="absolute -left-[9999px]">
              Description
            </label>
            <textarea
              className="p-1 w-full h-[150px] resize-none"
              name="description"
              placeholder="What was the movie about?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className=" col-span-2">
            <button type="submit" className="btn-green w-1/3">
              Add
            </button>
            <button
              type="button"
              className="btn-red w-1/3"
              onClick={() => setModal(false)}
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
