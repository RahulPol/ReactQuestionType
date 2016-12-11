window.Question = React.createClass({

    shouldComponentUpdate: function () {
        //Never update board component
        return false;
    },//shouldComponentUpdate

    componentDidMount: function () {
        CKEDITOR.replace(this.refs.question);
    },//componentDidMount
    

    render: function () {
        return (
            <div className="question-box">
                <textarea ref="question" id={this.props.id} rows="5" cols="50" >
                </textarea>
            </div>
        );
    },

});