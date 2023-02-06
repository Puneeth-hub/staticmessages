import React from 'react';
import './App.css'

const data = [
 {'id': 0, 'subject': 'FxQbdkfcsO', 'body': 'QMiwBsrBnBAQjLkgsjRL', 'views_count': 560}, 
 {'id': 1, 'subject': 'MRfZBCIOnv', 'body': 'flQtZhhxpQarBgauQMOn', 'views_count': 45}, 
 {'id': 2, 'subject': 'NreoetWDkO', 'body': 'YHTaAXOrOGsatQYvCxFS', 'views_count': 750}, 
 {'id': 3, 'subject': 'ipoCzCVqCb', 'body': 'LBuJVJQZJfgkHTHqBbOA', 'views_count': 879}, 
 {'id': 4, 'subject': 'mDpquuSCYo', 'body': 'xrnkUDxwRmekREIHUKOa', 'views_count': 907}, 
 {'id': 5, 'subject': 'WUuzwSLGMn', 'body': 'RKdAmKrYAjkkISLAupAF', 'views_count': 142}, 
 {'id': 6, 'subject': 'mhFENQOUVr', 'body': 'AVxdQmyxZYCdfLAbwUio', 'views_count': 616}, 
 {'id': 7, 'subject': 'ScBmVBOGtn', 'body': 'GYsgiRCBergFCUBLKhxF', 'views_count': 65}, 
 {'id': 8, 'subject': 'RZDpOQvqfD', 'body': 'XREqFqHUicQmgBDUsWWs', 'views_count': 310}, 
 {'id': 9, 'subject': 'lMCBOBWuGJ', 'body': 'hTXOywfxPACcwZVBhPEK', 'views_count': 198}, 
 {'id': 10, 'subject': 'KNiFjwwdws', 'body': 'fabQZnoHKOWDIsRgSDUr', 'views_count': 182}, 
 {'id': 11, 'subject': 'kMvqWqGtKH', 'body': 'KMKrpMiOddVeiSliCwXA', 'views_count': 482}, 
 {'id': 12, 'subject': 'BrCAtiKKeM', 'body': 'cFkwosLiNeeSuhHEjXTp', 'views_count': 150}, 
 {'id': 13, 'subject': 'yVHgcjTOJY', 'body': 'GVTQdyzrFlrvpaiBaCqm', 'views_count': 811}, 
 {'id': 14, 'subject': 'YAyKXqmKmv', 'body': 'IkAIFhnVxOLeOnbimXDO', 'views_count': 60}, 
 {'id': 15, 'subject': 'fPGIMoXEUw', 'body': 'EPwzZbClLkXKMhjmSmCo', 'views_count': 434}, 
 {'id': 16, 'subject': 'EYltjLfrFz', 'body': 'YHZdXyJwtugytCxAWJDk', 'views_count': 579}, 
 {'id': 17, 'subject': 'lFfCrIZtmi', 'body': 'vGrGKjKHwhfEWMNjNHSH', 'views_count': 981}, 
 {'id': 18, 'subject': 'ESkIYFGFza', 'body': 'PMSrmaAMnGYYdXgjgLAq', 'views_count': 63}, 
 {'id': 19, 'subject': 'FmYVzYjBpA', 'body': 'leRDdAWqEnFGaWqVDefG', 'views_count': 675}, 
 {'id': 20, 'subject': 'rykbBvfBNo', 'body': 'SkqmGmwWWIdXvKOZQoOd', 'views_count': 18}, 
 {'id': 21, 'subject': 'ZNYWIGpBPd', 'body': 'eoTpzEhVVVhXYKwgropB', 'views_count': 189}, 
 {'id': 22, 'subject': 'gVAbplZjNT', 'body': 'ZelQqZchKGAhUHOIFwzO', 'views_count': 910}, 
 {'id': 23, 'subject': 'ZSUGEfrzJw', 'body': 'ZfRaZorakgsCnJvsXkEQ', 'views_count': 686}, 
 {'id': 24, 'subject': 'OvEtcvutbp', 'body': 'HQbyeTaqkPILjrCgfeMQ', 'views_count': 277}, 
 {'id': 25, 'subject': 'rPEyWYzlmk', 'body': 'TozfimMgPydlYVjMQAtE', 'views_count': 116}, 
 {'id': 26, 'subject': 'FVLLUDjiWS', 'body': 'CMzqApyOgPSaVXFDRPhY', 'views_count': 101}, 
 {'id': 27, 'subject': 'IFqScVfXGa', 'body': 'VtVzwPbodzBLqWnMMqoO', 'views_count': 377}, 
 {'id': 28, 'subject': 'ywupqJFYzu', 'body': 'jOnacsPzdAaFOpvsSQXv', 'views_count': 426}, 
 {'id': 29, 'subject': 'gkmXZwmlnL', 'body': 'yEYDqdZGQEcqUJpnVUBp', 'views_count': 984}, 
 {'id': 30, 'subject': 'HZFIUOzkWr', 'body': 'lbJAnHNrIjzNxuKkfzZh', 'views_count': 51}, 
 {'id': 31, 'subject': 'MAyGlnjyOB', 'body': 'BEVjxanlxMIkysUotQcw', 'views_count': 622}, 
 {'id': 32, 'subject': 'pOtDYUprlj', 'body': 'PwYrFXBEnpkVRuOsHGeG', 'views_count': 267}, 
 {'id': 33, 'subject': 'MSuGnjTHfX', 'body': 'WkjVeuLJopSOwdIZdbDu', 'views_count': 957}, 
 {'id': 34, 'subject': 'xkNPPAIxtE', 'body': 'mvkEVaVkbKYYyLfZnJqy', 'views_count': 295}, 
 {'id': 35, 'subject': 'VAnVXLPwwd', 'body': 'sMJNjCPyxVdcwrVwbuEU', 'views_count': 534}, 
 {'id': 36, 'subject': 'IxvdnSfqjr', 'body': 'nqVypoZmsfbzyjmDOPiQ', 'views_count': 921}, 
 {'id': 37, 'subject': 'aHOaLYOHfG', 'body': 'ewRGdIZWXGYZOYrfuQtx', 'views_count': 201}, 
 {'id': 38, 'subject': 'MOpXJKRzct', 'body': 'WvPTRpehDiCYDcxmUuQd', 'views_count': 419}, 
 {'id': 39, 'subject': 'nhTMPgbKQl', 'body': 'eUDMNxsqyPMrovJOCjwC', 'views_count': 863}, 
 {'id': 40, 'subject': 'yknpcXaCWl', 'body': 'zgveHpAbiknNxOILxowf', 'views_count': 609}, 
 {'id': 41, 'subject': 'YcVoSKoFUS', 'body': 'BLpNCHEzTBOEtKncEVkL', 'views_count': 748}, 
 {'id': 42, 'subject': 'EmMVmoOjiJ', 'body': 'ahOPXLonVaPbEEeLlzHv', 'views_count': 164}, 
 {'id': 43, 'subject': 'zNUpDAoiEW', 'body': 'LLhXOiJbGWlXospIrtMC', 'views_count': 413}, 
 {'id': 44, 'subject': 'wVattTeBjP', 'body': 'LpgMCneePQXSEIWsXQJt', 'views_count': 188}, 
 
 {'id': 45, 'subject': 'onPwURURoK', 'body': 'YeRPyQLgvHICiVcgETMc', 'views_count': 832}, 
 {'id': 46, 'subject': 'dUgmvvjrnS', 'body': 'VRumDmtIMYYXxTfqYteq', 'views_count': 57}, 
 {'id': 47, 'subject': 'FQSDIGinDZ', 'body': 'mZvLRNHDsFJhMzBPAhMJ', 'views_count': 386}, 
 {'id': 48, 'subject': 'XGaLSlSKQd', 'body': 'QAkLhKuPDQGrXKVWlNgy', 'views_count': 164}, 
 
 {'id': 49, 'subject': 'twyPKZFKjl', 'body': 'SxglBdaSMhueFsvLwRDn', 'views_count': 795}, 
 {'id': 50, 'subject': 'XjWicPwASF', 'body': 'JhuqgywFtjGFJTFEtUkV', 'views_count': 397}, 
 {'id': 51, 'subject': 'GZvxjskIqV', 'body': 'UvxModzYaSGYsKCMGlbJ', 'views_count': 977}, 
 {'id': 52, 'subject': 'yTEaniiirC', 'body': 'nXgRrWuOiBFsrZqbKpjR', 'views_count': 974}, 
 {'id': 53, 'subject': 'HEvcmZoUCR', 'body': 'uRGvbUpKsaPcBDQUnjGC', 'views_count': 78}, 
 {'id': 54, 'subject': 'oDnWghLLFM', 'body': 'iiKQtMxhqKbuqIcxYDkG', 'views_count': 228}, 
 {'id': 55, 'subject': 'WTjRdXVpBR', 'body': 'paiTNacPQAmXVPOiPqxY', 'views_count': 92}, 
 {'id': 56, 'subject': 'WVoCHidsoc', 'body': 'uzmHlssxbmZCAspvLdok', 'views_count': 301}, 
 {'id': 57, 'subject': 'JRjszUgYne', 'body': 'NZezoehgpyslfZtSwIei', 'views_count': 75}, 
 {'id': 58, 'subject': 'uxVpDmiEqh', 'body': 'pEPgBtqzdaMfThBEtLBy', 'views_count': 515}, 
 {'id': 59, 'subject': 'guLxrTuzxK', 'body': 'QLDMahqWUWWNlrWLjDmS', 'views_count': 384}, 
 {'id': 60, 'subject': 'PoATfOnZnx', 'body': 'EtGFGBzVQnBzYQOYTvwP', 'views_count': 241}, 
 {'id': 61, 'subject': 'xlJFjozOEs', 'body': 'maXgwWhXeTeOFsJXGMVh', 'views_count': 112}, 
 {'id': 62, 'subject': 'DGKhlKewkT', 'body': 'hbMiXdQVtYCRlQGbrRtQ', 'views_count': 802}, 
 {'id': 63, 'subject': 'OIkoZFXFTd', 'body': 'ISvgyLddKHqzhAfniDpc', 'views_count': 789}, 
 {'id': 64, 'subject': 'qoiggOegJv', 'body': 'LkObEQvBUAFhtniPnkPR', 'views_count': 534}, 
 {'id': 65, 'subject': 'OymZxYJJcS', 'body': 'wEnmGhVBwseClLGKvlQf', 'views_count': 435}, 
 {'id': 66, 'subject': 'fmCzWCoPlo', 'body': 'SWXwUMZvZnbLXLdADvAK', 'views_count': 737}, 
 {'id': 67, 'subject': 'KKWdJxUTyl', 'body': 'kTifgoSomEORMhXnFQQg', 'views_count': 830}, 
 {'id': 68, 'subject': 'wOQTzujpYP', 'body': 'NnRAYjXpQOoKIEieMsom', 'views_count': 937}, 
 {'id': 69, 'subject': 'yzpHZCMNhx', 'body': 'exsxUSqfRUPZuAtRTqIJ', 'views_count': 360}, 
 {'id': 70, 'subject': 'aEOSiEJbot', 'body': 'gxsDpDmcTznzckzccvyD', 'views_count': 324}, 
 {'id': 71, 'subject': 'GJXUDslkUb', 'body': 'KTrITpgEBmKvFuWMsvAN', 'views_count': 58}, 
 {'id': 72, 'subject': 'EPucIGsBaE', 'body': 'qjHGsvDQPLTnDWOxySNs', 'views_count': 860},
  {'id': 73, 'subject': 'FzNNwJhoKe', 'body': 'qNFqIxjpKFcblCtfntOO', 'views_count': 165}, 
  {'id': 74, 'subject': 'nSaTjVBDUK', 'body': 'INcWEWtUdUHzOyyOhuPo', 'views_count': 810}, 
  
  {'id': 75, 'subject': 'ffxliMMARQ', 'body': 'sNolAdSvviJnYEIsFUtq', 'views_count': 990}, 
  {'id': 76, 'subject': 'oGpkUNDAPQ', 'body': 'rjCFBEctXJnsQwRabUKW', 'views_count': 756}, 
  {'id': 77, 'subject': 'JkCYPCQkRx', 'body': 'MvEIEYEZUWUboHAlcPeW', 'views_count': 304}, 
  {'id': 78, 'subject': 'bjgJQPzHXH', 'body': 'CjSBMyWOVWTXyIScsZhx', 'views_count': 728}, 
  {'id': 79, 'subject': 'fRiiXFDuAm', 'body': 'iwRmkrAwtdffeHCXPxOS', 'views_count': 648}, 
  {'id': 80, 'subject': 'OsWVyjeUNJ', 'body': 'wcsclZGGvnXgqlNvjfUH', 'views_count': 597}, 
  {'id': 81, 'subject': 'vfBCcJOVmX', 'body': 'huVqlpDbCkwojGKAhRvr', 'views_count': 392}, 
  {'id': 82, 'subject': 'YTJLAyIBWt', 'body': 'ZyJQXvdsJLdBliWNoyxf', 'views_count': 538}, 
  {'id': 83, 'subject': 'IXAZtKjRiQ', 'body': 'UVgyfIWfIVAtBCOmqVJl', 'views_count': 291},
   {'id': 84, 'subject': 'JMbaxxWWmT', 'body': 'cTvvVutdGigaDEVSyLnf', 'views_count': 872}, 
   {'id': 85, 'subject': 'keDsUQvPLk', 'body': 'qQTFEpFSqxLNUhlgjbKA', 'views_count': 531}, 
   {'id': 86, 'subject': 'TLNIUUvWez', 'body': 'gdFAWWSnfuNtllEssXPl', 'views_count': 661}, 
   {'id': 87, 'subject': 'moaidxUJzI', 'body': 'WNUzUHiFUVLfBuCdoupl', 'views_count': 833}, 
   {'id': 88, 'subject': 'tFgYVFDPdf', 'body': 'WEIsgkXHfCSVCZTkPsxg', 'views_count': 185}, 
   {'id': 89, 'subject': 'UNfelXPUjM', 'body': 'ezgpDtsCccPWhPvzitsy', 'views_count': 246}, 
   {'id': 90, 'subject': 'USgSpnYeOF', 'body': 'lsopBEGbeigsSJPSuBHi', 'views_count': 563}, 
   {'id': 91, 'subject': 'xgluAhNUqL', 'body': 'wnqyHtubzGkvZckUpSpr', 'views_count': 474}, 
   {'id': 92, 'subject': 'GwrHHHfjnZ', 'body': 'eaZgfjfJrqMlrTlxshEm', 'views_count': 136}, 
   {'id': 93, 'subject': 'zEYgGWHVfo', 'body': 'CltqvIhqVffHazCROQdB', 'views_count': 880}, 
   {'id': 94, 'subject': 'iJWVzQmrmi', 'body': 'cyImwKpYlrNmzBEMSJEC', 'views_count': 838}, 
   {'id': 95, 'subject': 'VUzJiSaLDm', 'body': 'aAwPIHDLTujcFwnqysnR', 'views_count': 795}, 
   {'id': 96, 'subject': 'sdwdRwFyAj', 'body': 'PudJkkoVdVLhxXsoHNec', 'views_count': 638}, 
   {'id': 97, 'subject': 'CxXhmprEQS', 'body': 'bRguaQADWNoeSfmCeeQg', 'views_count': 775}, 
   {'id': 98, 'subject': 'MhAoQzEHge', 'body': 'ILHNdoTtxlBdASLrBoiY', 'views_count': 935}, 
   {'id': 99, 'subject': 'fFRqfsakus', 'body': 'QlMHjYRaGTWiKUqetSUz', 'views_count': 963}
];

function App() {
  return (
    <div >
       <h1>Messages...!</h1> 
        
    <div>
      {data.map(item => (
        <li key= {item.id} className='list-data'>
            <h2>Id:{item.id}</h2>
          <h3>Subject:{item.subject}</h3>
          <p>Body:{item.body}</p>
          <p>Views: {item.views_count}</p><hr/>
        </li>
      ))}
    </div>
    </div>
  );
}

export default App;
