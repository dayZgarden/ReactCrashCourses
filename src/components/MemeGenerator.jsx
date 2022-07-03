import React from 'react';

class MemeGenerator extends React.Component{

    constructor() {
        super()
        this.state ={
            topText:'',
            bottomText:'',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemeImgs: memes})
        })
    }

    handleChange(event) {
        const {name, type, checked, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const meme = this.state.allMemeImgs[randNum]
        this.setState({randomImg: meme.url})
    }
    
    render(){ 

    return (
        <div>

            <form className ='meme__form' 
            onSubmit={this.handleSubmit}>

                <input 
                type="text"
                name="topText"
                value={this.state.topText}
                placeholder='Top text'
                onChange={this.handleChange}
                />
                <br />
                <input
                 placeholder='Bottom text'
                 type="text"
                 name='bottomText'
                 onChange={this.handleChange}
                 value={this.state.bottomText}
                  />
                <br />
                <button
                >Gen</button>

            </form>
            <div className="meme">
                <img src={this.state.randomImg} alt="" className='meme__img'/>
                <h2 className='meme__text a'>{this.state.topText}</h2>
                <h2 className='meme__text b'>{this.state.bottomText}</h2>
            </div>
        </div>
        )}
}

export default MemeGenerator;
