__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(4048),n=17,o={fontSize:'25px',height:'25px',margin:'8px',width:'25px'},s={right:'53px',bottom:'355px'},p=295,u=t=>{const n=a(d[2]).createElement(i(d[3]),{href:r(d[4]).buildLoginLink(r(d[5]).browserHistory.location.pathname,{source:'post_comment_input'})},r(d[1])(2978));return a(d[2]).createElement("span",null,r(d[1])(531,{loginLink:n}))},l=t=>a(d[2]).createElement("span",null,r(d[1])(2634,{username:t.username})),h=t=>a(d[2]).createElement("div",{className:"up_hg"},a(d[2]).createElement("span",null,r(d[1])(2770,{username:t.username})),a(d[2]).createElement(r(d[6]).Button,{borderless:!0,color:"ig-secondary-button",onClick:t.onClearReply},"✕"));class c extends a(d[2]).Component{constructor(t){super(t),this.$PostCommentInput1=null,this.focusAndScroll=(()=>{const t=()=>{const t=i(d[7])(this.$PostCommentInput2);t.focus(),r(d[8]).isMobile()&&setTimeout(()=>{'function'==typeof t.scrollIntoView&&(t.scrollIntoView(!0),window.scrollBy(0,-200))},10)};this.setState({hasBeenFocused:!0},()=>{setTimeout(()=>t())})}),this.$PostCommentInput5=(t=>{t.preventDefault(),this.$PostCommentInput4()||(this.props.onCommentChange(this.state.pendingComment),this.setState({needsFlush:!1}),this.props.onCommentSubmit().then(()=>{this.$PostCommentInput2&&this.$PostCommentInput2.blur()}))}),this.$PostCommentInput6=(t=>{'Enter'!==t.key||t.shiftKey||this.$PostCommentInput5(t)}),this.$PostCommentInput7=(t=>{t.stopPropagation()}),this.$PostCommentInput8=((t,n)=>{this.state.commentAttempt||i(d[9])._("f3cb0e417d8b73758be753a0ddc2afb7")||r(d[10]).logAction_DEPRECATED('commentAttempt',{source:this.props.analyticsContext,type:!0===this.props.isVideo?'video':'photo',isLoggedIn:this.props.isLoggedIn}),this.setState({commentAttempt:!0,cursorIndex:n,isEmojiTrayOpen:null!=this.$PostCommentInput3,needsFlush:!0,pendingComment:t})}),this.$PostCommentInput9=(t=>{this.closeEmojiTrayIfOpen()}),this.$PostCommentInput10=(t=>{this.$PostCommentInput2=t,i(d[9])._("d9876f2cb8a2db484645b0588a557829")&&(null!=t?this.$PostCommentInput1=i(d[11]).trackTypingPerf(t,'PostCommentInput'):null!=this.$PostCommentInput1&&(this.$PostCommentInput1(),this.$PostCommentInput1=null))}),this.$PostCommentInput11=(t=>{this.setState({hasBeenFocused:!0,hasFocus:!0})}),this.$PostCommentInput12=(t=>{this.setState({hasFocus:!1}),t.relatedTarget!==this.emojiPickerButton.current&&this.closeEmojiTrayIfOpen()}),this.$PostCommentInput13=(()=>{const{analyticsContext:t,id:n,ownerId:o}=this.props;r(d[12]).logInteractionAction({containerModule:t,eventName:'instagram_organic_comment_button',mediaId:n,mediaAuthorId:o})}),this.$PostCommentInput14=((t,n)=>{const{updatedCursorIndex:o,updatedText:s}=i(d[13])(t,n,this.state.pendingComment,this.state.cursorIndex);this.$PostCommentInput8(s,o)}),this.$PostCommentInput15=(t=>{var n,o;this.$PostCommentInput3=t;const s=(null===(n=this.$PostCommentInput2)||void 0===n?void 0:n.selectionStart)||0,p=(null===(o=this.$PostCommentInput2)||void 0===o?void 0:o.selectionEnd)||0,u=this.state.pendingComment.substring(0,s)+t+this.state.pendingComment.substring(p),l=s+t.length;this.$PostCommentInput8(u,l)}),this.$PostCommentInput16=(t=>{!0===t&&r(d[10]).logAction_DEPRECATED('emojiButtonClicked',{source:this.props.analyticsContext,type:!0===this.props.isVideo?'video':'photo',isLoggedIn:this.props.isLoggedIn}),this.setState({isEmojiTrayOpen:t})}),this.emojiPickerButton=a(d[2]).createRef(),this.state={commentAttempt:!1,hasBeenFocused:!1,needsFlush:!1,pendingComment:t.pendingComment,cursorIndex:t.pendingComment.length,isEmojiTrayOpen:!1}}componentDidMount(){!0===this.props.willFocusAndScrollToInput&&this.focusAndScroll()}componentWillUnmount(){!this.props.commentSaveIsInFlight&&this.state.needsFlush&&this.state.pendingComment.length>0&&this.props.onCommentChange(this.state.pendingComment)}componentDidUpdate(t,n){const{commentSaveIsInFlight:o,pendingComment:s}=this.props;this.$PostCommentInput2&&!n.hasBeenFocused&&this.state.hasBeenFocused&&this.$PostCommentInput2.focus(),t.pendingComment!==s&&(this.setState({pendingComment:s,cursorIndex:s.length}),this.$PostCommentInput2&&this.$PostCommentInput2.focus());const p=n.isEmojiTrayOpen!==this.state.isEmojiTrayOpen;(null!=this.$PostCommentInput3||p)&&(this.$PostCommentInput3=null,this.$PostCommentInput2&&(p&&this.setState({cursorIndex:this.$PostCommentInput2.selectionEnd}),this.$PostCommentInput2.focus())),t.commentSaveIsInFlight&&!o&&''===s&&this.setState({pendingComment:'',needsFlush:!0})}shouldComponentUpdate(t,n){return this.props.className!==t.className||this.props.commentSaveIsInFlight!==t.commentSaveIsInFlight||this.props.pendingComment!==t.pendingComment||this.state.pendingComment!==n.pendingComment||this.state.hasBeenFocused!==n.hasBeenFocused||this.state.hasFocus!==n.hasFocus||this.state.isEmojiTrayOpen!==n.isEmojiTrayOpen}$PostCommentInput4(){return 0===this.state.pendingComment.trim().length||this.props.commentSaveIsInFlight}closeEmojiTrayIfOpen(){this.setState(t=>t.isEmojiTrayOpen?{isEmojiTrayOpen:!1}:{})}displayForm(){return a(d[2]).createElement("form",{className:"X7cDz",method:"POST",onSubmit:this.$PostCommentInput5},this.props.commentSaveIsInFlight&&a(d[2]).createElement(r(d[6]).Spinner,{position:"absolute"}),r(d[8]).isDesktop()&&a(d[2]).createElement(r(d[14]).IGCoreEmojiButton,{emojiArrowLeftOffset:n,emojiIconStyles:o,emojiTrayPositionStyles:s,emojiTrayWidth:p,isEmojiTrayOpen:this.state.isEmojiTrayOpen,onEmojiClick:this.$PostCommentInput15,ref:this.emojiPickerButton,setEmojiTrayOpen:this.$PostCommentInput16}),a(d[2]).createElement(i(d[15]),{"aria-label":t,autosize:!0===this.props.forceTextareaAutosize||!0===this.props.willFocusAndScrollToInput||this.state.hasBeenFocused||''!==this.state.pendingComment,className:"Ypffh",cursorIndex:this.state.cursorIndex,"data-testid":"post-comment-text-area",disabled:this.props.commentSaveIsInFlight,inputRef:this.$PostCommentInput10,onBlur:this.$PostCommentInput12,onChange:this.$PostCommentInput8,onClick:this.$PostCommentInput9,onFocus:this.$PostCommentInput11,onKeyPress:this.$PostCommentInput6,onKeyUp:this.$PostCommentInput7,onTypeaheadResultSelect:this.$PostCommentInput14,placeholder:t,value:this.state.pendingComment}),this.props.hasPostButton&&a(d[2]).createElement(r(d[6]).Button,{borderless:!0,"data-testid":"post-comment-input-button",disabled:this.$PostCommentInput4(),onClick:this.$PostCommentInput13,type:"submit"},r(d[1])(3401)))}$PostCommentInput17(){return!this.$PostCommentInput2||this.props.viewportHeight-this.$PostCommentInput2.getBoundingClientRect().bottom>200}render(){const{canViewerProvideFeedback:t,className:n,hasRichCommentInput:o,isLoggedIn:s,onClearReply:p,ownerUsername:c,repliedToUsername:C,viewerProfilePicture:I}=this.props;return a(d[2]).createElement("section",{className:i(d[16])(`sH9wk ${!0===o?"n1LTb":""}`,n)},a(d[2]).createElement("div",{className:"RxpZH"},!0===o&&null!=I&&''!==I&&a(d[2]).createElement(i(d[17]),{className:"_8tZ3C",isLink:!1,profilePictureUrl:I,size:r(d[6]).CORE_CONSTANTS.AVATAR_SIZES.small}),s?t?this.displayForm():a(d[2]).createElement(l,{username:i(d[7])(c)}):a(d[2]).createElement(u,null)),null!=C&&''!==C&&r(d[8]).isMobile()&&a(d[2]).createElement(h,{onClearReply:p,username:C}),s&&t&&!0===this.state.hasFocus&&a(d[2]).createElement(i(d[18]),{className:`${r(d[8]).isMobile()?"q6Mjn":""} ${r(d[8]).isMobile()?"":"Mfkwx"} ${r(d[8]).isMobile()||this.$PostCommentInput17()?"":"wUsz1"}`,cursorIndex:this.state.cursorIndex,inputString:this.state.pendingComment,onResultSelect:this.$PostCommentInput14,showResultsCondensed:!0,useSearchTriggers:!0}))}}c.defaultProps={forceTextareaAutosize:r(d[8]).isMobile(),hasRichCommentInput:!1};var C=r(d[22]).connect(function(t,n){const o=t.pendingComments.get(n.id);return{analyticsContext:t.navigation.pageIdentifier||'',commentSaveIsInFlight:(null===o||void 0===o?void 0:o.committing)||!1,loading:t.search.loading,ownerUsername:i(d[7])(r(d[19]).getUserById(t,n.ownerId).username),pendingComment:(null===o||void 0===o?void 0:o.text)||'',repliedToCommentAuthorId:null===o||void 0===o?void 0:o.repliedToCommentAuthorId,repliedToCommentId:null===o||void 0===o?void 0:o.repliedToCommentId,repliedToUsername:null===o||void 0===o?void 0:o.repliedToUsername,results:t.search.results,searchedForQuery:t.search.searchedForQuery,selectedIndex:t.search.selectedIndex,viewportHeight:t.displayProperties.viewportHeight}},function(t,n){return{onCommentChange(o,s,p,u){t(r(d[20]).changePendingComment(n.id,o,s,p,u))},onClearReply(){t(r(d[20]).clearPendingComment(n.id))},onCommentSubmit:()=>t(r(d[20]).commitPendingComment(n.id,n.ownerId,n.analyticsContext)),onTypeaheadResultHighlight(n,o){t(r(d[21]).selectResult(n,o))}}},function(t,n,o){return{...t,...n,...o,onCommentChange:o=>n.onCommentChange(o,t.repliedToCommentId,t.repliedToCommentAuthorId,t.repliedToUsername)}},{forwardRef:!0})(c);e.default=C},6488064,[6488065,13434940,3,13500475,13435175,13435299,13500463,13500444,13434887,13434937,13434982,13435102,3801122,13238733,13238735,13238734,13500468,13500510,13238710,13435261,6488066,13435581,5]);
__d(function() {},6488065,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(o,n,c){const s=new(r(d[1]).FunctionalityTracker)('comment');return(u,l)=>{var p;s.attempt(),u({type:r(d[0]).COMMIT_PENDING_COMMENT_REQUESTED,postId:o}),i(d[2])._("f3cb0e417d8b73758be753a0ddc2afb7")||r(d[3]).logAction_DEPRECATED('comment',{source:c});const C=l(),{text:E,repliedToCommentAuthorId:I,repliedToCommentId:_}=C.pendingComments.get(o,r(d[4]).EMPTY_PENDING_COMMENT),{hasRankedComments:T}=C.posts.byId.get(o,{hasRankedComments:!1}),b=Boolean(null===(p=r(d[5]).getViewer(C))||void 0===p?void 0:p.isVerified);return s.request(),i(d[6])(r(d[7]).commentOnPost(o,E,_).then(t=>{s.responseSuccess();const p=i(d[8])(r(d[5]).getViewer(l())).id,M=t.id;u({type:r(d[0]).COMMIT_PENDING_COMMENT_SUCCEEDED,postId:o,commentText:E,hasRankedComments:T,commentAuthorId:p,commentAuthorIsVerified:b,commentId:M,postedAt:Math.round(Date.now()/1e3),repliedToCommentId:_}),i(d[2])._("f3cb0e417d8b73758be753a0ddc2afb7")||r(d[3]).logAction_DEPRECATED('commentSuccess',{source:c}),r(d[9]).logOrganicComment({commentAuthorId:p,commentId:M,containerModule:c,mediaId:o,mediaAuthorId:n,mediaType:r(d[10]).getMediaTypeById(C,o),parentCommentId:_,parentCommentAuthorId:I}),s.completeSuccess()},l=>{var p;s.responseFailure();const C=(null===(p=l.responseObject)||void 0===p?void 0:p.spam)||!1;if(C){var E,I,_,T;const t=null===(E=l.responseObject)||void 0===E?void 0:E.feedback_title,o=null===(I=l.responseObject)||void 0===I?void 0:I.feedback_message,n=null===(_=l.responseObject)||void 0===_?void 0:_.feedback_url,c=null===(T=l.responseObject)||void 0===T?void 0:T.feedback_action;u(r(d[11]).showSentryFeedback({title:t,message:o,url:n,action:c}))}u({type:r(d[0]).COMMIT_PENDING_COMMENT_FAILED,postId:o,toast:C?void 0:{text:r(d[12])(2196),actionText:r(d[12])(287),actionHandler:()=>u(t(o,n,c))}}),i(d[2])._("f3cb0e417d8b73758be753a0ddc2afb7")||r(d[3]).logAction_DEPRECATED('commentFailure',{source:c}),s.completeFailure()}))}}Object.defineProperty(e,'__esModule',{value:!0}),e.changePendingComment=function(t,o,n,c,s){return{type:r(d[0]).CHANGE_PENDING_COMMENT,postId:t,text:o,repliedToCommentId:n,repliedToCommentAuthorId:c,repliedToUsername:s}},e.clearPendingComment=function(t){return{type:r(d[0]).CLEAR_PENDING_COMMENT,postId:t}},e.commitPendingComment=t},6488066,[13435137,13435277,13434937,13434982,13238410,13435261,13434974,13435067,13500444,3801119,3801128,13435550,13434940]);