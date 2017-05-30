import React from 'react';

const CategoriesSelector = (props) => {
  return (
    <div className="">
      <div className="page-header">
        <h2>Create Resource</h2>
      </div>
      <div className="">
        <ul>
          <h4>Add Category</h4>
          {props.allCategories
            ? props.allCategories.map(item => (
                <li onClick={props.addCategory.bind(this, item)}>
                  {item.name}
                </li>
              ))
            : null}
        </ul>
      </div>
      <div>
        <ul>
          <h4>Remove Category</h4>
          {props.categories
            ? props.categories.map(item => (
                <li onClick={props.removeCategory.bind(this, item)}>
                  {item.name}
                </li>
              ))
            : null}
        </ul>
      </div>
      <div>
        <h3>Need to create a new category?</h3>
        <form onSubmit={props.submitCategory}>
          <label>Cagtegory Name</label>
          <input
            onChange={event =>
              props.onFieldChange('createCategory', event.target.value)}
            type="text"
            className="form-control pull-left"
            placeholder="..."
          />
          <button type="submit" className="btn btn-primary my-primary-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoriesSelector;
