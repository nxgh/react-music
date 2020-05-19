import { createGlobalStyle } from 'styled-components'

const extendClick = () => {
  return `
      position: relative;
      &:before{
        content: '';
        position: absolute;
        top: -10px; bottom: -10px; left: -10px; right: -10px;
      };
    `
}

const noWrap = () => {
  return `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `
}

export const globalStyle = {
  'theme-color': '#d44439',
  'theme-color-shadow': 'rgba(212, 68, 57, .5)',
  'font-color-light': '#f1f1f1',
  'font-color-desc': '#2e3030',
  'font-color-desc-v2': '#bba8a8', //略淡
  'font-size-ss': '0.625rem',
  'font-size-s': '0.75rem',
  'font-size-m': '0.875rem',
  'font-size-l': '1rem',
  'font-size-ll': '1.125rem',
  'border-color': '#e4e4e4',
  extendClick,
  noWrap,
}

export default createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		text-decoration: none;
		color: #fff;
    }
    html {
        font-size: 16px;
    }
    html, body{
		background: ${globalStyle['theme-color']};
    }

    .iconfont {
        width: ${globalStyle['font-size-l']};
        height: ${globalStyle['font-size-l']};
    }
    
`
