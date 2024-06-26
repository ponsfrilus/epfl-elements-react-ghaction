import './index.css'

const stiLogo = 'data:image/png;base64,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'

export type userProps = {
    first_name?: string;
    last_name?: string;
    sciper?: string;
    photo_url?: string;
}

type AvatarProps = {
  user?: userProps;
  logOutUrl?: string;
  logoUrl?: string;
  logoAltText?: string
}

export function Avatar ({ user = {}, logOutUrl, logoUrl, logoAltText }: AvatarProps) {
  const getBackGroundImage = () => `url('${user.photo_url}')`
  const avatarLogo = logoUrl || stiLogo
  const avatarLogoAltText = logoAltText || 'Logo STI, EPFL school of engineering'

  function handleLogout () {
    if (logOutUrl) {
      // Remove cached stuff in localstorage before leaving.
      window.localStorage.clear()
      window.location.assign(logOutUrl)
    }
  }

  return (
    <nav className='nav-lang nav-lang-short ml-auto'>
      <div className='avatar-teaser'>
        <div style={{ paddingRight: '10px' }}>
          <img className='avatar-logo' src={avatarLogo} alt={avatarLogoAltText} />
        </div>
        <a
          className='avatar-teaser-img-placeholder'
          href={`https://people.epfl.ch/${user.sciper}`}
          rel='noopener noreferrer'
          target='_blank'
        >
          <div style={{ backgroundImage: getBackGroundImage() }} className='avatar_image' />
        </a>
        <div className='avatar-teaser-body'>
          <p>{user.last_name}, {user.first_name}</p>
        </div>
        <div style={{ color: '#fff' }}>
          <a className='btn btn-primary btn-sm' onClick={handleLogout}>logout</a>
        </div>
      </div>
    </nav>
  )
}
