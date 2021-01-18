import React from 'react';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            meineKurseButtonClicked: "false"
        };
        this.handleMeineKurse = this.handleMeineKurse.bind(this);
    }
    handleMeineKurse(event){
        this.setState(state => {
            state.meineKurseButtonClicked = "true";
            return state;
        });
    }
    render(){
        return(
            <div>
                <p>Header</p>
                <table>
                    <tr>
                        <td>
                            <button name="meineKurseButton"
                                onClick={this.handleMeineKurse}>
                                    Meine Kurse {this.state.meineKurseButtonClicked}
                            </button>
                        </td>
                        <td>
                            <button name="meineKurseButton"
                                onClick={this.handleMeineKurse}>
                                    Katalog {this.state.meineKurseButtonClicked}
                            </button>
                        </td>
                        <td>
                            <button name="meineKurseButton"
                                onClick={this.handleMeineKurse}>
                                    Forum {this.state.meineKurseButtonClicked}
                            </button>
                        </td>
                        <td>
                            <button name="meineKurseButton"
                                onClick={this.handleMeineKurse}>
                                    Meine Kurse {this.state.meineKurseButtonClicked}
                            </button>
                        </td>
                    </tr>
                </table>

            </div>
        );
    }
}