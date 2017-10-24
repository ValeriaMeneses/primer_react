import React, { Component } from 'react';

class TextMovie extends Component{
  render(){
    return(
      <div className = "App">
        <h2 className="App-title"> Interestelar</h2>
        <p className="App-intro">
          Inspirada en la teoría del experto en relatividad Kip Stepehen Thorne sobre la existencia de los agujeros de gusano, y su función como canal para llevar a cabo los viajes en el tiempo. <br/> La historia gira en torno a un grupo de intrépidos exploradores que se adentran por uno de esos agujeros y viajan a través del mismo, encontrándose en otra dimensión. Un mundo desconocido se abre ante ellos y deberán luchar por mantenerse unidos si quieren volver de una pieza.
          <hr/>
        </p>
        <img class = "img" src = "http://2.bp.blogspot.com/-DaeF-Xh8yVs/VF-XLPyyM4I/AAAAAAAAFRY/5_EkehK-mwQ/s1600/Interstellar-3.jpg"/>
    </div>)
  }
}

export default TextMovie
