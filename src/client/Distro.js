import React from 'react';

const myFavOS = `
                  sMN-
                 +MMMm'
                /MMMMMd
               :NMMMMMMy
              -NMMMMMMMMs
             .NMMMMMMMMMM+
            .mMMMMMMMMMMMM+
            oNMMMMMMMMMMMMM+
          '+:-+NMMMMMMMMMMMM+
          .sNMNhNMMMMMMMMMMMM/
        'hho/sNMMMMMMMMMMMMMMM/
       '.'omMMmMMMMMMMMMMMMMMMM+
      .mMNdshMMMMd+::oNMMMMMMMMMo
     .mMMMMMMMMM+     'yMMMMMMMMMs
    .NMMMMMMMMM/        yMMMMMMMMMy
   -NMMMMMMMMMh         'mNMMMMMMMMd'
  /NMMMNds+:.'             '-/oymMMMm.
 +Mmy/.                          ':smN:
/+.                                  -o.
`;

const minWidth = 269;
const minHeight = 285;

const Distro = () => {
  return (
    <div
      style={{
        color: 'white',
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginTop: `-${minHeight / 2}px`,
        marginLeft: `-${minWidth / 2}px`,
        fontSize: '0.7em',
      }}
    >
      <div
        style={{
          whiteSpace: 'pre-wrap',
          maxWidth: `${minWidth}px`,
          minHeight: `${minHeight}px`,
        }}
      >
        {myFavOS}
      </div>
    </div>
  );
};

export default Distro;
