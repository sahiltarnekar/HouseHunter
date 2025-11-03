import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Header() {
  const location = useLocation()

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarSupportedContent')
    const toggler = document.querySelector('.navbar-toggler')

    // Prefer Bootstrap API if available
    if (navbarCollapse && window.bootstrap && window.bootstrap.Collapse) {
      try {
        const instance = window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false })
        instance.hide()
        return
      } catch (_) {}
    }

    // Fallback: trigger toggler click when open on mobile
    const isOpen = navbarCollapse && navbarCollapse.classList.contains('show')
    const isTogglerVisible = toggler && toggler.offsetParent !== null
    if (isOpen && toggler && isTogglerVisible) {
      toggler.click()
      return
    }

    // Last resort: force class and aria state
    if (isOpen) {
      navbarCollapse.classList.remove('show')
      if (toggler) toggler.setAttribute('aria-expanded', 'false')
    }
  }

  useEffect(() => {
    // Close on route change as a safety
    closeNavbar()
  }, [location.pathname])

	return (
            <>
        <header className="fixed-top" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
        }}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <NavLink 
                className="navbar-brand fw-bold" 
                to="/" 
                onClick={closeNavbar}
                style={{
                  fontSize: '1.5rem',
                  background: 'linear-gradient(135deg, #2c3e50, #3498db)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '0.5px'
                }}
              >
                HouseHunter
              </NavLink>
              
              <button
                className="navbar-toggler border-0 shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent" onClick={(e) => {
                const target = e.target
                if (target && (target.closest('a.nav-link') || target.closest('a.btn'))) {
                  closeNavbar()
                }
              }}>
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
                  <li className="nav-item">
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => 
                        isActive ? 'nav-link active px-3 py-2 rounded-pill fw-medium' : 'nav-link px-3 py-2 rounded-pill'
                      } 
                      end
                      onClick={closeNavbar}
                      style={({ isActive }) => ({
                        background: isActive ? 'linear-gradient(135deg, rgba(44,62,80,0.1), rgba(52,152,219,0.1))' : '',
                        transition: 'all 0.3s ease'
                      })}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      to="/aboutus" 
                      className={({ isActive }) => 
                        isActive ? 'nav-link active px-3 py-2 rounded-pill fw-medium' : 'nav-link px-3 py-2 rounded-pill'
                      }
                      onClick={closeNavbar}
                      style={({ isActive }) => ({
                        background: isActive ? 'linear-gradient(135deg, rgba(44,62,80,0.1), rgba(52,152,219,0.1))' : '',
                        transition: 'all 0.3s ease'
                      })}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      to="/properties" 
                      className={({ isActive }) => 
                        isActive ? 'nav-link active px-3 py-2 rounded-pill fw-medium' : 'nav-link px-3 py-2 rounded-pill'
                      }
                      onClick={closeNavbar}
                      style={({ isActive }) => ({
                        background: isActive ? 'linear-gradient(135deg, rgba(44,62,80,0.1), rgba(52,152,219,0.1))' : '',
                        transition: 'all 0.3s ease'
                      })}
                    >
                      Properties
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      to="/agents" 
                      className={({ isActive }) => 
                        isActive ? 'nav-link active px-3 py-2 rounded-pill fw-medium' : 'nav-link px-3 py-2 rounded-pill'
                      }
                      onClick={closeNavbar}
                      style={({ isActive }) => ({
                        background: isActive ? 'linear-gradient(135deg, rgba(44,62,80,0.1), rgba(52,152,219,0.1))' : '',
                        transition: 'all 0.3s ease'
                      })}
                    >
                      Agents
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => 
                        isActive ? 'nav-link active px-3 py-2 rounded-pill fw-medium' : 'nav-link px-3 py-2 rounded-pill'
                      }
                      onClick={closeNavbar}
                      style={({ isActive }) => ({
                        background: isActive ? 'linear-gradient(135deg, rgba(44,62,80,0.1), rgba(52,152,219,0.1))' : '',
                        transition: 'all 0.3s ease'
                      })}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <NavLink 
                  to="/list-property" 
                  className="btn px-4 py-2"
                  onClick={closeNavbar}
                  style={{
                    background: 'linear-gradient(135deg, #2c3e50, #3498db)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  List Your Property
                </NavLink>
              </div>
            </div>
          </nav>
        </header>
        
            </>
	)
}

export default Header

