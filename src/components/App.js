import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp} from '../firebase';
import '../css/app.css';




class App extends Component {


    signOut(){
        firebaseApp.auth().signOut()
    }


    render(){
		
        return(
            <div>

                <header>
                    <div className="wrapper">
                            <div className="header_logo">
                                <div className="header_logo-img"></div>
                                <span className="header_logo-text">Good Inc.</span>
                        </div>

                        <div className="subhead ">
                            <div className="header_nav">
                                <div className="header_nav-content">
                                    <ul className="nav">
                                        <li className="nav_list">
                                        <span className="nav_wrap active"><a className="nav_link" href="">Portfolio</a></span>
                                        </li>
                                        <li className="nav_list">
                                        <span className="nav_wrap"><a className="nav_link" href="">Services</a></span>
                                        </li>
                                        <li className="nav_list">
                                        <span className="nav_wrap"><a className="nav_link" href="">Staff</a></span>
                                        </li>
                                        <li className="nav_list">
                                        <span className="nav_wrap"><a className="nav_link" href="">Articles</a></span>
                                        </li>
                                    </ul> 
                                   
                                    <button 
                                    className="btn"
                                    onClick={() => this.signOut()}
                                    >
                                    Выйти
                                    </button>  
                                </div>				
                            </div>	
                        </div>

                    </div>
                </header>
                <section className="content">
	                <div className="wrapper">

		<button id="burger" onClick="burger_menu()">
			<span className='burger-menu'></span>
		</button> 
		
		<section className="content_info ">
			 <div className="content_info_sidebar " id="sidebar">
				<ul className="sidebar">
					<li className="sidebar_list">
						<span>Размер шрифта</span>
						<ul>
							<li ><input type="text" id="changeSize" /></li>
						</ul>
					</li>
					<li className="sidebar_list">
						<span>Цвет фона</span>
						<ul>
							<li><input type="radio" id="bg_grey" name="bg_color" /><label for= "bg_grey" >Серый</label></li>
							<li><input type="radio" id="bg_green" name="bg_color" /><label for="bg_green" >Зеленый</label></li>
							<li><input type="radio" id="bg_blue" name="bg_color" /><label for="bg_blue" >Синий</label></li>
							<li><input type="radio" id="bg_yellow" name="bg_color" /><label for="bg_yellow" >Желтый</label></li>
						</ul>
					</li>
					<li className="sidebar_list">
						<span>Шрифт</span>
						<ul>
							<li><input type="radio" id="font_arial" name="font" /><label for="font_arial">Arial</label></li>
							<li><input type="radio" id="font_tnr" name="font" /><label for="font_tnr">Times New Roman</label></li>
							<li><input type="radio" id="font_ss" name="font" /><label for="font_ss">Sans-Serif</label></li>
						</ul>
					</li>
					<li className="sidebar_list">
						<button id="del"><span>Удалить параграф</span></button>				
					</li>
				</ul>
			</div> 
						
			<div className="content_info_list">
				<div className="content_info_list-img"></div>
				<div className="content_info_list-text">
				<h2> I like long walks, especially when they are taken by people who really annoy me. </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Donec eu turpis purus. Pellentesque ullamcorper mauris vitae 
					sapien bibendum tincidunt. 
					Morbi malesuada mauris sed nibh placerat sit amet posuere libero egestas. 
					Vestibulum consectetur iaculis est, at dapibus purus malesuada vitae. 
					Mauris smassa, non laoreet lorem fringilla non.
				</p>
				</div>
			</div>
								
		</section>

		<section className="content_block1 ">
			<div className="content_text">
				<div className="content_img">
					<div className="block1_img" > </div>
					<div className="content_img-text">
					Good Inc. image caption to go here
					</div>
				</div>
				<div className="content_about ">
					<h2> Housework can't kill you, but why take a chance? </h2>
					<p className="content_about-text">Quisque accumsan eleifend dolor, nec bibendum nibh ultricies at. 
					Nunc convallis risus sit amet augue bibendum non lobortis eros 
					interdum. Maecenas quis risus felis, at volutpat elit...</p>
					<p className="content_about-date">14th April 2013</p>
				</div>
			</div>  
		</section>
		
		<section className="content_articles">
			<div className="article_1">
				<div className="article_img1" />
				<div className="article_link">
					<h2> Taste & Sounds from Thailand</h2>
					<p>We've made some small changes to BlazRobar.com...</p>
				</div>
			</div>
			<div className="article_2">
                <div className="article_img2" />
				<div className="article_link">
					<h2> BlazRobar.com is awesome for PSD</h2>
					<p>We've made some small changes to BlazRobar.com...</p>
				</div>
			</div>
			<div className="article_3">
                <div className="article_img3" />
				<div className="article_link">
					<h2> Nice Looking 
						Mountains Ah? </h2> 
					<p>We've made some small changes to BlazRobar.com...</p>
				</div>
			</div>
		</section>

	
	</div>
</section>
	
<footer>
    <div className="footer_content wrapper">
        <div className="footer_content_nav">
            <a className="footer__link" href="">About us</a>
            <a className="footer__link" href="">Footer Links here </a>
            <a className="footer__link" href="">Privacy</a>
            <a className="footer__link" href="">Page Links also</a>
        </div>
        <div className="footer_content_text">
                As cross as a hoon my built like a op shop. 
                We're going bored sh*tless heaps she'll be right budgie smugglers.
                 Grab us a durry mate she'll be right dunny rat. She'll be right larrikin with skite. 
                 As stands out like kero it'll be truckie.
        </div>
    </div>
</footer>





            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state',);
    return{}
}
export default connect(mapStateToProps,null)(App);