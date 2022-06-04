import Sidebar from './components/Sidebar';
import bg1 from '../assets/images/img_bg_1.jpg';
import bg2 from '../assets/images/img_bg_2.jpg';
const ClientLayout = ()=>{
    return (
        <>
           <div id="colorlib-page">
                <div className="container-wrap">
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                    
                    <Sidebar />
                    
                </div>
		    </div>
        </>
    )
}

export default ClientLayout;