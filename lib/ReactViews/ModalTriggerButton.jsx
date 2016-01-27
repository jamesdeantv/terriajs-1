'use strict';
const React = require('react');

// Any button that triggers a modal open with a callback (e.g., go to a certain tab, enabled a preview, etc)
const ModalTriggerButton = React.createClass({
    propTypes: {
        btnHtml: React.PropTypes.string,
        classNames: React.PropTypes.string,
        callback: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        setWrapperState: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            callback: null,
            btnHtml: null,
            activeTab: 0
        };
    },

    openModal() {
        this.props.setWrapperState({
            modalWindowIsOpen: true,
            activeTab: this.props.activeTab
        });
    },

    renderBtnHtml() {
        return {
            __html: this.props.btnHtml
        };
    },

    render() {
        return (<button onClick={this.openModal} className={'btn ' + this.props.classNames} dangerouslySetInnerHTML={this.renderBtnHtml()}></button>);
    }
});
module.exports = ModalTriggerButton;