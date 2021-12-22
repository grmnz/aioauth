Search.setIndex({docnames:["contents","index","sections/documentation/collections","sections/documentation/config","sections/documentation/constances","sections/documentation/errors","sections/documentation/grant_type","sections/documentation/models","sections/documentation/requests","sections/documentation/response_type","sections/documentation/responses","sections/documentation/server","sections/documentation/storage","sections/documentation/types","sections/documentation/utils","sections/examples/aiohttp","sections/examples/fastapi","sections/understanding/plug_and_play","sections/using/configuration","sections/using/server_database"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["contents.rst","index.rst","sections/documentation/collections.rst","sections/documentation/config.rst","sections/documentation/constances.rst","sections/documentation/errors.rst","sections/documentation/grant_type.rst","sections/documentation/models.rst","sections/documentation/requests.rst","sections/documentation/response_type.rst","sections/documentation/responses.rst","sections/documentation/server.rst","sections/documentation/storage.rst","sections/documentation/types.rst","sections/documentation/utils.rst","sections/examples/aiohttp.rst","sections/examples/fastapi.rst","sections/understanding/plug_and_play.rst","sections/using/configuration.rst","sections/using/server_database.rst"],objects:{"aioauth.collections":{HTTPHeaderDict:[2,1,1,""]},"aioauth.config":{Settings:[3,1,1,""]},"aioauth.config.Settings":{AUTHORIZATION_CODE_EXPIRES_IN:[3,2,1,""],AVAILABLE:[3,2,1,""],ERROR_URI:[3,2,1,""],INSECURE_TRANSPORT:[3,2,1,""],REFRESH_TOKEN_EXPIRES_IN:[3,2,1,""],TOKEN_EXPIRES_IN:[3,2,1,""]},"aioauth.constances":{default_headers:[4,3,1,""]},"aioauth.errors":{InsecureTransportError:[5,4,1,""],InvalidClientError:[5,4,1,""],InvalidGrantError:[5,4,1,""],InvalidRequestError:[5,4,1,""],InvalidScopeError:[5,4,1,""],MethodNotAllowedError:[5,4,1,""],MismatchingStateError:[5,4,1,""],ServerError:[5,4,1,""],TemporarilyUnavailableError:[5,4,1,""],UnauthorizedClientError:[5,4,1,""],UnsupportedGrantTypeError:[5,4,1,""],UnsupportedResponseTypeError:[5,4,1,""]},"aioauth.errors.InsecureTransportError":{description:[5,2,1,""],error:[5,2,1,""]},"aioauth.errors.InvalidClientError":{error:[5,2,1,""],status_code:[5,2,1,""]},"aioauth.errors.InvalidGrantError":{error:[5,2,1,""]},"aioauth.errors.InvalidRequestError":{error:[5,2,1,""]},"aioauth.errors.InvalidScopeError":{error:[5,2,1,""]},"aioauth.errors.MethodNotAllowedError":{description:[5,2,1,""],error:[5,2,1,""],status_code:[5,2,1,""]},"aioauth.errors.MismatchingStateError":{description:[5,2,1,""],error:[5,2,1,""]},"aioauth.errors.ServerError":{error:[5,2,1,""]},"aioauth.errors.TemporarilyUnavailableError":{error:[5,2,1,""]},"aioauth.errors.UnauthorizedClientError":{error:[5,2,1,""]},"aioauth.errors.UnsupportedGrantTypeError":{error:[5,2,1,""]},"aioauth.errors.UnsupportedResponseTypeError":{error:[5,2,1,""]},"aioauth.grant_type":{AuthorizationCodeGrantType:[6,1,1,""],ClientCredentialsGrantType:[6,1,1,""],GrantTypeBase:[6,1,1,""],PasswordGrantType:[6,1,1,""],RefreshTokenGrantType:[6,1,1,""]},"aioauth.grant_type.AuthorizationCodeGrantType":{create_token_response:[6,5,1,""],validate_request:[6,5,1,""]},"aioauth.grant_type.GrantTypeBase":{create_token_response:[6,5,1,""],validate_request:[6,5,1,""]},"aioauth.grant_type.PasswordGrantType":{validate_request:[6,5,1,""]},"aioauth.grant_type.RefreshTokenGrantType":{create_token_response:[6,5,1,""],validate_request:[6,5,1,""]},"aioauth.models":{AuthorizationCode:[7,1,1,""],Client:[7,1,1,""],Token:[7,1,1,""]},"aioauth.models.AuthorizationCode":{auth_time:[7,2,1,""],check_code_challenge:[7,5,1,""],client_id:[7,2,1,""],code:[7,2,1,""],code_challenge:[7,2,1,""],code_challenge_method:[7,2,1,""],expires_in:[7,2,1,""],is_expired:[7,5,1,""],nonce:[7,2,1,""],redirect_uri:[7,2,1,""],response_type:[7,2,1,""],scope:[7,2,1,""],user:[7,2,1,""]},"aioauth.models.Client":{check_grant_type:[7,5,1,""],check_redirect_uri:[7,5,1,""],check_response_type:[7,5,1,""],check_scope:[7,5,1,""],client_id:[7,2,1,""],client_secret:[7,2,1,""],get_allowed_scope:[7,5,1,""],grant_types:[7,2,1,""],redirect_uris:[7,2,1,""],response_types:[7,2,1,""],scope:[7,2,1,""],user:[7,2,1,""]},"aioauth.models.Token":{access_token:[7,2,1,""],client_id:[7,2,1,""],expires_in:[7,2,1,""],is_expired:[7,5,1,""],issued_at:[7,2,1,""],refresh_token:[7,2,1,""],refresh_token_expired:[7,5,1,""],refresh_token_expires_in:[7,2,1,""],revoked:[7,2,1,""],scope:[7,2,1,""],token_type:[7,2,1,""],user:[7,2,1,""]},"aioauth.requests":{Post:[8,1,1,""],Query:[8,1,1,""],Request:[8,1,1,""]},"aioauth.requests.Post":{client_id:[8,2,1,""],client_secret:[8,2,1,""],code:[8,2,1,""],code_verifier:[8,2,1,""],grant_type:[8,2,1,""],password:[8,2,1,""],redirect_uri:[8,2,1,""],refresh_token:[8,2,1,""],scope:[8,2,1,""],token:[8,2,1,""],token_type_hint:[8,2,1,""],username:[8,2,1,""]},"aioauth.requests.Query":{client_id:[8,2,1,""],code_challenge:[8,2,1,""],code_challenge_method:[8,2,1,""],nonce:[8,2,1,""],redirect_uri:[8,2,1,""],response_mode:[8,2,1,""],response_type:[8,2,1,""],scope:[8,2,1,""],state:[8,2,1,""]},"aioauth.requests.Request":{headers:[8,2,1,""],method:[8,2,1,""],post:[8,2,1,""],query:[8,2,1,""],settings:[8,2,1,""],url:[8,2,1,""],user:[8,2,1,""]},"aioauth.response_type":{ResponseTypeAuthorizationCode:[9,1,1,""],ResponseTypeBase:[9,1,1,""],ResponseTypeIdToken:[9,1,1,""],ResponseTypeNone:[9,1,1,""],ResponseTypeToken:[9,1,1,""]},"aioauth.response_type.ResponseTypeAuthorizationCode":{create_authorization_response:[9,5,1,""]},"aioauth.response_type.ResponseTypeBase":{validate_request:[9,5,1,""]},"aioauth.response_type.ResponseTypeIdToken":{create_authorization_response:[9,5,1,""],validate_request:[9,5,1,""]},"aioauth.response_type.ResponseTypeNone":{create_authorization_response:[9,5,1,""]},"aioauth.response_type.ResponseTypeToken":{create_authorization_response:[9,5,1,""]},"aioauth.responses":{AuthorizationCodeResponse:[10,1,1,""],ErrorResponse:[10,1,1,""],IdTokenResponse:[10,1,1,""],NoneResponse:[10,1,1,""],Response:[10,1,1,""],TokenActiveIntrospectionResponse:[10,1,1,""],TokenInactiveIntrospectionResponse:[10,1,1,""],TokenResponse:[10,1,1,""]},"aioauth.responses.AuthorizationCodeResponse":{code:[10,2,1,""],scope:[10,2,1,""]},"aioauth.responses.ErrorResponse":{description:[10,2,1,""],error:[10,2,1,""],error_uri:[10,2,1,""]},"aioauth.responses.IdTokenResponse":{id_token:[10,2,1,""]},"aioauth.responses.Response":{content:[10,2,1,""],headers:[10,2,1,""],status_code:[10,2,1,""]},"aioauth.responses.TokenActiveIntrospectionResponse":{active:[10,2,1,""],client_id:[10,2,1,""],expires_in:[10,2,1,""],scope:[10,2,1,""],token_type:[10,2,1,""]},"aioauth.responses.TokenInactiveIntrospectionResponse":{active:[10,2,1,""]},"aioauth.responses.TokenResponse":{access_token:[10,2,1,""],expires_in:[10,2,1,""],refresh_token:[10,2,1,""],refresh_token_expires_in:[10,2,1,""],scope:[10,2,1,""],token_type:[10,2,1,""]},"aioauth.server":{AuthorizationServer:[11,1,1,""]},"aioauth.server.AuthorizationServer":{create_authorization_response:[11,5,1,""],create_token_introspection_response:[11,5,1,""],create_token_response:[11,5,1,""],get_client_credentials:[11,5,1,""],grant_types:[11,2,1,""],is_secure_transport:[11,5,1,""],response_types:[11,2,1,""],validate_request:[11,5,1,""]},"aioauth.storage":{BaseStorage:[12,1,1,""]},"aioauth.storage.BaseStorage":{authenticate:[12,5,1,""],create_authorization_code:[12,5,1,""],create_token:[12,5,1,""],delete_authorization_code:[12,5,1,""],get_authorization_code:[12,5,1,""],get_client:[12,5,1,""],get_id_token:[12,5,1,""],get_token:[12,5,1,""],revoke_token:[12,5,1,""]},"aioauth.types":{CodeChallengeMethod:[13,1,1,""],ErrorType:[13,1,1,""],GrantType:[13,1,1,""],RequestMethod:[13,1,1,""],ResponseMode:[13,1,1,""],ResponseType:[13,1,1,""],TokenType:[13,1,1,""]},"aioauth.types.CodeChallengeMethod":{PLAIN:[13,2,1,""],S256:[13,2,1,""]},"aioauth.types.ErrorType":{INSECURE_TRANSPORT:[13,2,1,""],INVALID_CLIENT:[13,2,1,""],INVALID_GRANT:[13,2,1,""],INVALID_REQUEST:[13,2,1,""],INVALID_SCOPE:[13,2,1,""],METHOD_IS_NOT_ALLOWED:[13,2,1,""],MISMATCHING_STATE:[13,2,1,""],SERVER_ERROR:[13,2,1,""],TEMPORARILY_UNAVAILABLE:[13,2,1,""],UNAUTHORIZED_CLIENT:[13,2,1,""],UNSUPPORTED_GRANT_TYPE:[13,2,1,""],UNSUPPORTED_RESPONSE_TYPE:[13,2,1,""]},"aioauth.types.GrantType":{TYPE_AUTHORIZATION_CODE:[13,2,1,""],TYPE_CLIENT_CREDENTIALS:[13,2,1,""],TYPE_PASSWORD:[13,2,1,""],TYPE_REFRESH_TOKEN:[13,2,1,""]},"aioauth.types.RequestMethod":{GET:[13,2,1,""],POST:[13,2,1,""]},"aioauth.types.ResponseMode":{MODE_FORM_POST:[13,2,1,""],MODE_FRAGMENT:[13,2,1,""],MODE_QUERY:[13,2,1,""]},"aioauth.types.ResponseType":{TYPE_CODE:[13,2,1,""],TYPE_ID_TOKEN:[13,2,1,""],TYPE_NONE:[13,2,1,""],TYPE_TOKEN:[13,2,1,""]},"aioauth.types.TokenType":{ACCESS:[13,2,1,""],REFRESH:[13,2,1,""]},"aioauth.utils":{build_uri:[14,6,1,""],catch_errors_and_unavailability:[14,6,1,""],create_s256_code_challenge:[14,6,1,""],decode_auth_headers:[14,6,1,""],encode_auth_headers:[14,6,1,""],enforce_list:[14,6,1,""],enforce_str:[14,6,1,""],generate_token:[14,6,1,""],get_authorization_scheme_param:[14,6,1,""]},aioauth:{collections:[2,0,0,"-"],config:[3,0,0,"-"],constances:[4,0,0,"-"],errors:[5,0,0,"-"],grant_type:[6,0,0,"-"],models:[7,0,0,"-"],requests:[8,0,0,"-"],response_type:[9,0,0,"-"],responses:[10,0,0,"-"],server:[11,0,0,"-"],storage:[12,0,0,"-"],types:[13,0,0,"-"],utils:[14,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","data","Python data"],"4":["py","exception","Python exception"],"5":["py","method","Python method"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:data","4":"py:exception","5":"py:method","6":"py:function"},terms:{"172800":[3,8],"200":10,"300":[3,8,18],"401":5,"405":5,"500":5,"503":5,"6749":[1,6],"7636":[1,6,7],"7662":1,"86400":[3,8,18],"boolean":[3,12],"case":[2,7,14],"catch":14,"char":14,"class":[2,3,6,7,8,9,10,11,12,13,16,18],"default":[3,14,16,18],"function":[11,12,14],"import":[2,3,4,5,6,7,8,9,10,11,12,13,14,16,18],"int":[3,7,10,14],"new":[3,7,8,10,12],"public":[1,6,7],"return":[5,6,7,11,12,14],"true":[2,3,8,10,12,16],"try":5,For:[10,11,12],The:[1,4,5,6,7,11,12,14,18],Use:14,Used:[7,10],Using:[0,1],abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789:14,abil:7,about:6,access:[3,5,6,7,10,11,12,13,18],access_token:[7,10,12,13],account:7,across:7,action:12,activ:10,add:14,added:14,addit:2,advantag:17,after:[6,7],aioauth:[2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18],aioauth_fastapi:[11,16],aiohttp:[0,1,11],aiomysql:1,aiopg:1,alia:[8,10],aliev:1,all:[6,7,9,12,18],allow:[1,3,5,6,7,17,18],allowed_method:11,also:7,ani:[1,4,7,8,11,14],anoth:5,anymor:6,api:[7,11],app:[7,11,16],applic:[4,6,7,10,17],arbitrari:7,ascii:14,async:[6,9,11,12],asynchron:[1,17],attempt:[3,5],attribut:7,auth_tim:7,authent:[5,7,12,14],author:[1,3,4,5,6,7,9,11,12,14,18],authorization_cod:[7,10,11,13],authorization_code_expires_in:[3,8,18],authorization_header_valu:14,authorization_serv:16,authorizationcod:[7,12],authorizationcodegranttyp:[6,11,12],authorizationcoderespons:[9,10],authorizationserv:[10,11,12,16],avail:[3,5,8],await:11,back:[7,14],base64:14,base64url:14,base:[6,9],basestorag:[6,9,11,12,16],basic:14,bearer:10,becaus:[5,6,7],been:7,begin:7,behalf:7,below:11,best:6,better:6,between:7,bool:[3,7,10,11,12],box:[1,6],browser:7,build:14,build_uri:14,cach:[4,10],call:[7,11],callabl:14,can:[7,11,18],cannot:5,capabl:14,catch_errors_and_unavail:14,certif:11,challeng:[7,12,13,14],chang:18,charact:[7,14],check:[7,11,18],check_code_challeng:7,check_grant_typ:7,check_redirect_uri:7,check_response_typ:7,check_scop:7,choic:14,choos:17,claim:7,client:[1,5,6,7,8,9,12,14],client_credenti:[11,13],client_id:[6,7,8,10,12,14],client_secret:[6,7,8,12,14],clientcredentialsgranttyp:[6,11],code:[1,3,5,6,7,8,9,10,11,12,13,14,18],code_challeng:[7,8,12],code_challenge_method:[7,8,12],code_verifi:[7,8,14],codechallengemethod:[8,12,13],collect:[0,1,5,6,8,10,14],com:1,command:[1,16],commun:7,compar:2,complet:8,compliant:1,condit:5,confidenti:6,config:[0,1,8,16,18],configur:[0,1,3],conjunct:11,connect:[3,12,18],consent:7,constanc:[0,1],constant:[4,13],consum:18,contain:[2,4,7,8,9,11,13,14],content:[4,10],context:6,continu:6,control:[4,10],convert:[11,14],core:12,coroutin:14,could:14,creat:[3,6,7,8,10,11,14],create_authorization_cod:12,create_authorization_respons:[9,11],create_s256_code_challeng:14,create_token:12,create_token_introspection_respons:[10,11],create_token_respons:[6,11],creator:7,credenti:[4,5,6],critic:7,csrf:5,current:[5,6,18],data:7,databas:[0,1,12,17],date:7,debug:18,decod:14,decode_auth_head:14,decor:14,def:11,default_head:4,delet:12,delete_authorization_cod:12,delta:7,deped:11,depend:18,descript:[5,10,18],design:17,develop:[16,17],devic:7,dict:[2,10,11,14],dictionari:14,differ:6,disabl:[3,18],disallow:6,discuss:1,document:[0,1,11],doe:[5,11,12,14],doesn:[7,14],due:5,each:7,either:7,empti:14,enabl:16,encod:14,encode_auth_head:14,encount:[3,5],encrypt:14,endpoint:[11,16],enforce_list:14,enforce_str:14,ensur:[6,11],entir:6,entropi:14,enumer:13,environ:18,equal:5,errata:12,error:[0,1,3,10,13,14,18],error_uri:[3,8,10],errorrespons:10,errortyp:[5,10,13],exampl:[0,1,2,11,12,16,18],exce:5,except:[5,7,9,14],exchang:[1,6,7],exist:12,expect:7,expir:[5,6,7,10],expires_in:[7,10],extens:6,fail:5,fals:[3,8,10,18],fastapi:[0,1,11],field:[2,4,5,8,10],file:14,flag:[7,11],flexibl:17,flow:[6,7],follow:[1,18],form:14,form_post:13,format:14,fragment:[13,14],framework:[1,11,17],from:[2,3,4,5,6,7,8,9,10,11,12,13,14,16,18],fulfil:5,fulli:11,further:6,gener:[7,10,12,14],generate_token:14,get:[6,7,11,12,13],get_allowed_scop:7,get_authorization_cod:12,get_authorization_scheme_param:14,get_client:12,get_client_credenti:11,get_id_token:12,get_oauth2_rout:16,get_token:12,getenv:18,gino:1,git:1,github:1,given:7,grant:[0,1,5,7,11,12,13],grant_typ:[6,7,8,11,12],granttyp:[7,8,11,13],granttypebas:6,guessabl:14,handl:[5,7],has:[6,7],hash:7,have:[6,7],header:[2,4,5,8,10,14],hello:2,helper:[12,14],here:[8,16],hour:3,how:11,http:[1,2,3,4,5,10,11,14,18],httpheaderdict:[2,5,8,10,14],httpstatu:[5,10],id_token:[10,11,12,13],identifi:7,idtokenrespons:[9,10],implement:[6,14,16],includ:[4,5,7,16],include_rout:16,incorpor:12,index:1,indic:[3,5,7,12],inform:[4,7,11,12],inherit:[6,9],initi:11,insecur:18,insecure_transport:[3,5,8,13,16,18],insecuretransporterror:5,insensit:[2,14],instal:0,instanc:[3,7,8,10,11,18],instead:[11,14],integr:5,interact:[6,11],interfac:11,intern:5,introspect:[1,11],invalid:[5,10,12,14],invalid_cli:[5,13],invalid_gr:[5,13],invalid_request:[5,13],invalid_scop:[5,13],invalidclienterror:[5,14],invalidgranterror:5,invalidrequesterror:5,invalidscopeerror:5,is_expir:7,is_secure_transport:11,issu:[1,5,7],issued_at:7,iter:[2,14],its:1,json:[4,7,10],kei:[1,6,7],kick:7,known:7,kwarg:2,latest:6,launch:7,length:14,leverag:11,lifetim:[3,18],like:[1,2,11],limit:7,line:[1,16],list:[7,11,14],local:16,locat:7,made:18,magic:1,mai:[5,7],mainten:5,make:7,malform:5,manag:7,match:5,mechan:7,memori:[7,11],method:[1,3,5,7,8,11,12,14,16,18],method_is_not_allow:[5,13],methodnotallowederror:5,minut:3,mismatching_st:[5,13],mismatchingstateerror:5,miss:5,mode:[13,18],mode_form_post:13,mode_frag:13,mode_queri:13,model:[0,1,6,9,12],modul:[1,14,17],mongodb:1,more:[5,7,8,11,12],motor:1,multipl:[2,7,10],must:[2,4,5,7,12,16],mysql:1,name:2,nativ:7,need:5,non:14,nonc:[7,8,12],none:[2,5,7,8,11,12,13,14],nonerespons:[9,10],nor:11,normal:7,note:[6,7,11,16],noth:14,number:[8,10],oauth2:[7,11,16],oauth2_request:11,oauth2_respons:11,oauth:[1,5,6,10,11,14],object:[7,8,9,10,11,12],obtain:[5,6,11],occur:7,off:7,onc:5,one:7,onli:[3,7,12,16,18],openid:[10,12],optim:7,option:[3,5,7,8,11,12,14,18],origin:14,orm:1,other:[1,4,6,9],otherwis:5,out:[1,6,11],outsid:6,over:[3,18],overload:5,own:[7,11,17],owner:[3,5,7,11,12],page:14,pair:2,param:14,paramat:14,paramet:[2,5,11,12,14],part:7,particular:7,pass:[2,7,11,14],password:[6,8,11,13],passwordgranttyp:[6,11,12],per:4,pertain:14,piec:7,pip:[1,16],pkce:7,plai:[0,1],plain:13,plug:[0,1],portion:[8,11],possibl:17,post:[8,11,13],postgresql:1,practic:6,pragma:[4,10],pre:1,prefix:16,present:[7,11],prevent:5,previous:7,project:[1,2,4,5,7,8,9,10,11,13,14],proof:[1,6,7],proper:14,properti:7,protect:11,provid:[5,6,7,17],python:1,queri:[7,8,13,14],query_param:14,rais:[3,14,18],random:[7,14],rather:6,read:8,receiv:7,recommend:6,record:12,redefinit:16,redirect:[3,5,6,7,12],redirect_uri:[7,8,12],refresh:[3,5,6,7,11,12,13],refresh_token:[7,8,10,11,12,13],refresh_token_expir:7,refresh_token_expires_in:[3,7,8,10],refreshtokengranttyp:[6,11,12],releas:1,repli:6,repres:11,represent:14,request:[0,1,5,6,7,9,11,12,13,18],requestmethod:[8,11,13],requir:5,resourc:[3,5,6,7,11,12],respond:5,respons:[0,1,4,5,6,7,11,12,13,14],response_mod:8,response_typ:[7,8,10,11,12],responsemod:[8,13],responseresponsetypeidtokentypetoken:10,responsetyp:[7,11,12,13],responsetypeauthorizationcod:[9,10,11,12],responsetypebas:9,responsetypeidtoken:[9,11,12],responsetypenon:[9,10,11],responsetypetoken:[9,10,11,12],respose_typ:12,result:7,retriev:[12,14],revok:[5,7,10,12],revoke_token:12,rfc2616:4,rfc6749:[5,11],rfc7662:11,rfc:[6,7],router:16,s256:[13,14],schema:14,scheme:[5,14],scope:[5,7,8,10,12,14],screen:7,search:1,second:3,secret:[7,12,14],section:[5,6,11,12],secur:[5,6,7,11],see:[5,6,10,11,12],send:6,sensit:[4,7],sent:11,separ:14,seper:[7,14],serv:11,server:[0,1,3,4,5,6,7,10,12,16,17,18],server_error:[5,13],servererror:5,servic:[5,7],set:[3,8,12,14,16,18],sha256:14,should:14,sidebar:12,simpli:[11,14],sinc:17,sourc:[2,3,5,6,7,8,9,10,11,12,13,14],space:[7,14],spec:1,specif:[11,14],specifi:14,sqlalchemi:1,ssl:[3,11,18],starlett:1,start:11,state:[5,8],statu:5,status_cod:[5,10],storag:[0,1,6,9,11,16],store:[2,4,10,12],str:[3,5,6,7,8,10,11,12,14],string:[7,8,12,14],successfulli:[7,12],support:5,systemrandom:14,tag:16,temporari:5,temporarily_unavail:[5,13],temporarilyunavailableerror:5,than:[5,6],thei:14,themselv:6,thi:[3,5,6,7,11,12,14,18],through:18,throughout:[2,4,5,7,8,9,10,13,14],thrown:5,time:7,to_fastapi_respons:11,to_oauth2_request:11,token:[1,3,4,5,6,7,8,9,10,11,12,13,14,18],token_expires_in:[3,8,18],token_typ:[7,10,12],token_type_hint:8,tokenactiveintrospectionrespons:10,tokeninactiveintrospectionrespons:10,tokenrespons:[6,9,10],tokentyp:[10,12,13],tortois:1,transform:7,transport:[11,18],tunnel:[3,11],tupl:[11,14],type:[0,1,4,5,7,8,10,11,12,14],type_authorization_cod:[11,13],type_client_credenti:[11,13],type_cod:[11,13],type_id_token:[11,13],type_non:[11,13],type_password:[11,13],type_refresh_token:[11,13],type_token:[11,13],typeerror:14,typic:6,unabl:5,unauthor:5,unauthorized_cli:[5,13],unauthorizedclienterror:5,unavail:5,understand:[0,1,11],unexpect:5,union:[7,14],uniqu:7,unknown:5,unsupport:5,unsupported_grant_typ:[5,13],unsupported_response_typ:[5,13],unsupportedgranttypeerror:5,unsupportedresponsetypeerror:5,updat:2,uri:[3,5,12,14],url:[6,7,8,11,14],usag:16,use:[1,5,6,7,14],used:[2,3,4,5,6,7,8,9,10,11,12,13,14],useful:7,user:[6,7,8,12],usernam:8,using:[5,14],usual:11,util:[0,1,5,11],valid:[3,5,6,10,11,12],validate_request:[6,9,11],valu:[2,4,5,7,13,14,18],valueerror:14,verifi:[5,7,11,14],via:[5,6,11],view:12,virtual:1,wai:[6,7],warn:5,web:7,well:[1,4,6,12,17],when:[2,3,6,7,14,18],whether:[3,7,11,12],which:[5,7,14],who:7,why:14,without:[3,6,7],work:[1,7],world:2,would:17,write:17,written:17,www:5,you:7,your:11},titles:["&lt;no title&gt;","\ud83d\udd10 aioauth","Collections","Config","Constances","Errors","Grant Type","Models","Requests","Response Type","Responses","Server","Storage","Types","Utils","Aiohttp","FastAPI","Plug-and-Play","Configuration","Server &amp; Database"],titleterms:{aioauth:1,aiohttp:15,collect:2,config:3,configur:18,constanc:4,databas:19,error:5,fastapi:16,grant:6,indic:1,instal:[1,16],model:7,page:1,plai:17,plug:17,request:8,respons:[9,10],rfc:1,section:1,server:[11,19],storag:12,support:1,tabl:1,type:[6,9,13],util:14}})