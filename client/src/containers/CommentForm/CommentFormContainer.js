import React, {Component} from 'react'
import $ from 'jquery'

class CommentFormContainer extends Component {
  state = {
    commentBody: undefined
  }

  submitComment(e){
    e.preventDefault()
    $.ajax({
      url: `/api/articles/comment/${this.props.articleId}`,
      method: 'POST',
      data: {message: this.state.commentBody}
    }).done((data) => {
      this.props.loadArticle()
      this.setState({commentBody: ''})
      // window.location = `/articles/view/${this.props.articleId}`
      // this.props.loadArticle(this.props.articleId)
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitComment(e)}>
          <h5> new comment </h5>
          <input placeholder="New Comment"
            onChange={(e) => this.setState({commentBody: e.target.value})}
           />
           <button type="submit"> comment </button>
        </form>
      </div>
    )
  }
}

CommentFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default CommentFormContainer
