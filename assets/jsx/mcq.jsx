
var Option = React.createClass({

    getInitialState: function () {
        return { selected: false }
    },

    onTickClicked:function(){
        this.setState({ selected: !this.state.selected });
    },//onTickClicked

    componentDidMount: function(){
        CKEDITOR.replace(this.props.optionId);
    },//componentDidMount

    render:function(){

        var value = "";
        if(this.props.action == "create"){
            value = "";
        }
        else if(this.props.action == "edit"){
            //call db and get option value
            value= "this is from db";
        }

        var optionButtonClass = "btn btn-sm btn-default";
        if (this.state.selected == true) {
            optionButtonClass = "btn btn-sm btn-success";
        } else {
            optionButtonClass = "btn btn-sm btn-default";
        }

        return (
            <div className="option-body col-md-6">
                <div className="option-header">
                    <span className="option-title">({this.props.optionText})</span>
                    <span className="pull-right"> 
                        <button  className={optionButtonClass} onClick={this.onTickClicked}>
                            <i className="fa fa-check" style={{ paddingRight: 10 + 'px' }}></i>mark this option as answer.
                        </button> 
                    </span>                    
                </div>
                <div className="option-text">
                    <textarea id={this.props.optionId} defaultValue={value}  rows="5" cols="50">
                    </textarea>
                </div>
            </div>
        );
    }//render
});

var OptionSet = React.createClass({

    getInitialState:function(){
        return {
            optionText:['A','B','C','D','E','F']
        }
    },

    optionCount: function(){
        if(this.props.action == 'create'){
            return 4;
        }
        else if(this.props.action == 'edit'){
            //call db with question id as this.props.questionId and get the count
            return 6;
        }
    },//optionCount    

    render:function(){
        var optionCount = this.optionCount();
        var options = [];
        for(var i=0; i<optionCount; i++) {
            var optionId = "option-" + this.state.optionText[i];
            options.push(<Option key={i} optionText={this.state.optionText[i]} optionId={optionId} questionId={this.props.questionId} action={this.props.action}></Option>);
        }

        return(
            <div className="option-set col-md-12">
                <div className="option-title col-md-12" style={{ marginLeft: -15 + 'px' }}> Options </div>  
                <div className="option-content">              
                    {options}
                </div>
            </div>
        );
    }//render
});

var Question = React.createClass({

    componentDidMount: function () {
        CKEDITOR.replace(this.props.questionId);
        if(this.props.action == "create"){
            //
        }
        else if(this.props.action == "edit"){
            //get question body data from ajax and update CKEDITOR
            var data = "<b>Test this!</b>";
            CKEDITOR.instances[this.props.questionId].setData(data);
        }
    },//componentDidMount

    render:function(){
        return (
            <div className="question-body">
                <textarea id={this.props.questionId} rows="5" cols="50">
                </textarea>
            </div>
        );
    }//render

});


window.Board = React.createClass({

    render:function(){
        return(
            <div className="mcq-board well well-bg col-md-12">
                <div className="question-header">
                    <span className="question-title">Question</span>
                    <span className="pull-right"> 
                        <button className="btn btn-success">Save</button> 
                    </span>
                </div>
                <div className="question col-md-12">
                    <Question action={this.props.action} questionId={this.props.questionId}></Question>                    
                </div>
                <div className="option row">
                    <OptionSet action={this.props.action} questionId={this.props.questionId}></OptionSet>
                </div>

            </div>
        );
    }//render

});


