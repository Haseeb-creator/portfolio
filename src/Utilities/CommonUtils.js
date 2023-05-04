import Home from '../PortfolioContianer/Home/Home'
import AboutMe from '../PortfolioContianer/AboutMe/AboutMe'
import Resume from '../PortfolioContianer/Resume/Resume'
import Testimonial from '../PortfolioContianer/Testimonial/Testimonial'
import ContactMe from '../PortfolioContianer/ContactMe/ContactMe'
import Blog from '../PortfolioContianer/Blogs/Blog'


export const TOTAL_SCREENS = [
	{
		screen_name: 'Home',
		component: Home,
	}, {
		screen_name: 'AboutMe',
		component: AboutMe,
	}, {
		screen_name: 'Resume',
		component: Resume,
	}, {
		screen_name: 'Testimonial',
		component: Testimonial,
	}, {
		screen_name: 'ContactMe',
		component: ContactMe,
	}
	, {
		screen_name: 'Blogs',
		component: Blog,
	}
]


export const GET_SCREEN_INDEX = (screen_name) => {
	if (!screen_name) return -1
	for (let i = 0; i < TOTAL_SCREENS.length; i++) {
		if (TOTAL_SCREENS[i].screen_name === screen_name) return i
	}
	return -1
}