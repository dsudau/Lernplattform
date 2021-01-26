import React from 'react';
import { SearchComponent } from './SearchComponent';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myCoursesButtonClicked: "false",
            catalogButtonClicked: "false",
            forumButtonClicked: "false"
        };
        this.handleMyCoursesButton = this.handleMyCoursesButton.bind(this);
        this.handleCatalogButton = this.handleCatalogButton.bind(this);
        this.handleForumButton = this.handleForumButton.bind(this);
    }
    handleMyCoursesButton(event){
        this.setState(state => {
            state.myCoursesButtonClicked = "true";
            return state;
        });
    }
    handleCatalogButton(event){
        this.setState(state => {
            state.catalogButtonClicked = "true";
            return state;
        });
    }
    handleForumButton(event){
        this.setState(state => {
            state.forumButtonClicked = "true";
            return state;
        });
    }
    render(){
        return(
            <div>
                <h1>Willkommen auf der Lernplattform</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button name="myCoursesButton"
                                    onClick={this.handleMyCoursesButton}>
                                        Meine Kurse
                                </button>
                            </td>
                            <td>
                                <button name="catalogButton"
                                    onClick={this.handleCatalogButton}>
                                        Katalog
                                </button>
                            </td>
                            <td>
                                <button name="forumButton"
                                    onClick={this.handleForumButton}>
                                        Forum
                                </button>
                            </td>
                            <td>
                                <SearchComponent/ >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}