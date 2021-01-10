import { Headline } from './Headline.js';
import { Paragraph } from './Paragraph.js';
export class Message extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "message"
    }, /*#__PURE__*/React.createElement(Headline, {
      headline: this.props.headline
    }), /*#__PURE__*/React.createElement(Paragraph, {
      text: this.props.text
    }));
  }

}