import ParticleBG from '../../utils/particle_bg/ParticleBG'
import Home from './Home'

const MainHome = () => {
    return (
        <>
            <div className='main_home'>
                <div className='particle_main'>
                    <ParticleBG />
                </div>
                <div className='home_main'>
                <Home />
                </div>

            </div>
        </>
    )
}

export default MainHome