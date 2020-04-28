import Fue from './FueJS/Fue.js';

const App = Fue.createElement(
  'div',
  {
    className: 'container',
  },
  Fue.createElement(
    'div',
    {
      className: 'left-side',
    },
    Fue.createElement('h4', null, 'Multi Anti-Virus & Cybersecurity'),
    Fue.createElement('img', {
      src: './img/radar-angle.png',
      className: 'radar',
    }),
    Fue.createElement(
      'div',
      {
        className: 'left-side-logo',
      },
      Fue.createElement('img', {
        src: './img/logo.png',
        alt: 'Logo',
      }),
      Fue.createElement('span', {
        className: 'radar',
      }),
      Fue.createElement('span', {
        className: 'pulse',
      }),
      Fue.createElement('span', {
        className: 'pulse',
      }),
      Fue.createElement('span', {
        className: 'pulse',
      }),
      Fue.createElement('span', {
        className: 'pulse',
      }),
      Fue.createElement('span', {
        className: 'pulse',
      }),
      Fue.createElement('span', {
        className: 'pulse',
      })
    )
  ),
  Fue.createElement(
    'div',
    {
      className: 'right-side',
    },
    Fue.createElement(
      'form',
      {
        className: 'form-login',
      },
      Fue.createElement(
        'div',
        {
          className: 'enter',
        },
        Fue.createElement('h5', null, '\u0648\u0631\u0648\u062F')
      ),
      Fue.createElement(
        'div',
        {
          className: 'form-login-entry',
        },
        Fue.createElement(
          'div',
          {
            className: 'form-login-entry-title',
          },
          Fue.createElement(
            'p',
            null,
            '\u0648\u0631\u0648\u062F \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC'
          ),
          Fue.createElement(
            'p',
            null,
            '\u062C\u0647\u062A \u0648\u0631\u0648\u062F \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F'
          )
        ),
        Fue.createElement(
          'label',
          null,
          Fue.createElement('input', {
            type: 'text',
            placeholder:
              '\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC',
          }),
          Fue.createElement('i', {
            className: 'fas fa-user',
          })
        ),
        Fue.createElement(
          'label',
          null,
          Fue.createElement('input', {
            type: 'password',
            placeholder: '\u0631\u0645\u0632 \u0639\u0628\u0648\u0631',
          }),
          Fue.createElement('i', {
            className: 'fas fa-lock',
          })
        ),
        Fue.createElement(
          'div',
          {
            className: 'form-login-entry-security',
          },
          Fue.createElement(
            'div',
            {
              className: 'form-login-entry-security-input',
            },
            Fue.createElement('input', {
              type: ' text',
              placeholder: '\u06A9\u062F \u0627\u0645\u0646\u06CC\u062A\u06CC',
            }),
            Fue.createElement('i', {
              className: 'fas fa-th',
            })
          ),
          Fue.createElement(
            'div',
            {
              className: 'form-login-entry-security-random',
            },
            Fue.createElement('img', {
              src: './img/random.jpg',
            }),
            Fue.createElement('i', {
              className: 'fas fa-sync',
            })
          )
        ),
        Fue.createElement(
          'button',
          {
            className: 'btn',
          },
          '\u0648\u0631\u0648\u062F'
        ),
        Fue.createElement(
          'div',
          {
            className: 'form-login-remember',
          },
          Fue.createElement('input', {
            type: 'checkbox',
          }),
          Fue.createElement(
            'span',
            null,
            '\u0645\u0631\u0627 \u0628\u0647 \u062E\u0627\u0637\u0631 \u0628\u0633\u067E\u0627\u0631'
          )
        )
      )
    )
  )
);
Fue.render(App, document.getElementById('root'));
