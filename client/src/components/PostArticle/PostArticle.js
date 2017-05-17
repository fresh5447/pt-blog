import React from 'react';

const PostForm = (props) =>
  <div>
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label>Article Title</label>
        <input type="text" className="form-control"  placeholder="title"
          onChange={(event) => props.onFieldChange('title', event.target.value)}
          required={true}
        />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea className="form-control" rows="10"
          onChange={(event) => props.onFieldChange('content', event.target.value)}
          required={true}
        />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>

export default PostForm;
