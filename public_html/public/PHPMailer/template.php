<?php

$hola ='
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>*|MC:SUBJECT|*</title>
        
        <style type="text/css">
		
			/*  CLIENT-SPECIFIC STYLES  */
			#outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
			#outlook { height:100%;}
			.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
			.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */
			body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
			table, td{ border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
			img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */
			/* .Products3columns a { display:block;} */
			#button a { color:#FFFFFF; }
			a:link img { display: block;}

			/*  RESET STYLES  */
			body{margin:0; padding:0; text-align:left !important;}
			img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
			body, #bodyTable, #bodyCell, #bodyCellFooter{height:100% !important; margin:0px !important; padding:0px !important; width:100% !important;}
			a img { border: none !important; }

			/*  TEMPLATE STYLES  */
			
			/* ========== Color Style ========== */
			#colored h3 {color:#7397C3 !important;}

			

			/* ========== Page Styles ========== */

			/* #templateContainer{width:600px;} fix for Gmail - inline style - by jopin */

			
			body, #bodyTable{
				background-color:#ffffff;
				
			}

			/**
			* @tab Page
			* @section background style
			* @theme page
			*/
			#bodyCell{
				/*@editable*/ background-color:#FAFAFA;
				}
			#bodyCellTop {background-color:#F9F9F9;}
			
			/**
			* @tab Preview
			* @section background style
			* @theme page
			*/	
			#preview{
				/*@editable*/background-color:#FFFFFF;
				/*@editable*/width:100%;
			}

			/**
			* @tab Page
			* @section heading 1
			* @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
			* @style heading 1
			*/
			h1{
				/*@editable*/ color:#383838 !important;
				 display: inline-block;
				 font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:22px;
				/*@editable*/ font-style:normal;
				/*@editable*/ font-weight:100;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				margin-top:0;
				margin-right:0;
				margin-bottom:0px;
				margin-left:0;
				/*@editable*/ text-align:left;
			}

			/**
			* @tab Page
			* @section heading 2
			* @tip Set the styling for all second-level headings in your emails.
			* @style heading 2
			*/
			h2{
				/*@editable*/ color:#7397C3 !important;
				display: inline-block;
				font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:21px;
				/*@editable*/ font-style:normal;
				/*@editable*/ font-weight:100;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				margin-top:0;
				margin-right:0;
				margin-bottom:0px;
				margin-left:0;
				/*@editable*/ text-align:left;
			}

			/**
			* @tab Page
			* @section heading 3
			* @tip Set the styling for all third-level headings in your emails.
			* @style heading 3
			*/
			h3{
				color:#555555 !important;
				display: inline-block;
				font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:16px;
				/*@editable*/ font-style:italic;
				/*@editable*/ font-weight:normal;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				margin-top:0;
				margin-right:0;
				margin-bottom:0px;
				margin-left:0;
				/*@editable*/ text-align:left;
			}

			/**
			* @tab Page
			* @section heading 4
			* @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
			* @style heading 4
			*/
			h4{
				/*@editable*/ color:#808080 !important;
				display: inline-block;
				font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:14px;
				/*@editable*/ font-style:italic;
				/*@editable*/ font-weight:normal;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				margin-top:0;
				margin-right:0;
				margin-bottom:0px;
				margin-left:0;
				/*@editable*/ text-align:left;
			}
			/**
			* @tab Page
			* @section heading 5
			* @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
			* @style heading 5
			*/
			h5{
				/*@editable*/ color:#383838 !important;
				display: inline-block;
				font-family:Georgia, "Times New Roman", Times, serif;
				font-size:18px;
				/*@editable*/ font-style:italic;
				/*@editable*/ font-weight:normal;
				/*@editable*/ line-height:100%;
				/*@editable*/ letter-spacing:normal;
				/*@editable*/ text-align:left;
			}
	
			.headerContent{
				color:#505050;
				font-family: Arial, Helvetica, sans-serif;
				font-size:20px;
				font-weight:bold;
				line-height:100%;
				padding-top:0;
				padding-right:0;
				padding-bottom:0;
				padding-left:0;
				text-align:left;
				vertical-align:middle;
			}


			.headerContent a:link, .headerContent a:visited, /* Yahoo! Mail Override */ .headerContent a .yshortcuts /* Yahoo! Mail Override */{
			color:#7397C3 !important;
			font-weight:normal;
			text-decoration:underline;
			}

			#headerImage{
				height:auto;
				max-width:600px;
			}

			/* ========== Body Styles ========== */

			/**
			* @tab Body
			* @section body style
			*/
			#templateBody{
				/*@editable*/ /* background-color:; */
				
			}

			/**
			* @tab Body
			* @section body text
			* @theme main
			*/
			.bodyContent{
				/*@editable*/ color:#666666;
				/*@editable*/ font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:15px;
				/*@editable*/ line-height:150%;
				padding-top:10px; /* Jopin*/
				padding-right:10px; /* Jopin*/
				padding-bottom:10px; /* Jopin*/
				padding-left:10px; /* Jopin*/
				/*@editable*/ text-align:left;
			}
			.bodyContent10px{
				color:#505050;
				font-family: Arial, Helvetica, sans-serif;
				font-size:15px;
				line-height:150%;
				padding-top:20px;
				padding-right:10px;
				padding-bottom:0px;
				padding-left:10px;
				text-align:left;
			}

			/**
			* @tab Body
			* @section body link
			*/
			.bodyContent a:link, .bodyContent a:visited, /* Yahoo! Mail Override */ .bodyContent a .yshortcuts /* Yahoo! Mail Override */{
				/*@editable*/ color:#7397C3 !important;
				/*@editable*/ font-weight:normal;
				/*@editable*/ text-decoration:underline;
			}

			.bodyContent img{
				display:inline;
				height:auto;
				max-width:580px;
			}
			/* ========== Products Styles ========== */
			.old-price{ display: inline-block; text-decoration:line-through;
			
			}

			/* ========== Column Styles ========== */

			.templateColumnContainer200 {width:200px;}
			.templateColumnContainer300 {width:300px;}
			.templateColumnContainer400 {width:400px;}
			.templateColumnContainer500 {width:500px;}
			.templateColumnContainer600 {width:600px;}

			#templateColumnsFooter{
				/*@editable*/ background-color:#F4F4F4;
				/*@editable*/ border-bottom:1px solid #CCCCCC;
			}
			.PreFooter_01, .PreFooter_02 { padding-top:10px; padding-bottom:10px;}


			/**
			* @tab Columns
			* @section left column text
			*/
			.leftColumnContent{
				/*@editable*/ color:#666666;
				/*@editable*/ font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:14px;
				/*@editable*/ line-height:150%;
				/*@editable*/ text-align:left;
				padding-top:0;
				padding-right:10px;
				padding-bottom:10px;
				padding-left:10px;
			}

			/**
			* @tab Columns
			* @section left column link
			*/
			.leftColumnContent a:link, .leftColumnContent a:visited, /* Yahoo! Mail Override */ .leftColumnContent a .yshortcuts /* Yahoo! Mail Override */{
				/*@editable*/ color:#7397C3;
				/*@editable*/ font-weight:normal;
				/*@editable*/ text-decoration:underline;
			}
			.centerColumnContent{
				/*@editable*/ color:#666666;
				/*@editable*/ font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:14px;
				/*@editable*/ line-height:150%;
				padding-top:0;
				padding-right:10px;
				padding-bottom:10px;
				padding-left:10px;
				/*@editable*/ text-align:left;
			}

			/**
			* @tab Columns
			* @section center column link
			*/
			.centerColumnContent a:link, .centerColumnContent a:visited, /* Yahoo! Mail Override */ .centerColumnContent a .yshortcuts /* Yahoo! Mail Override */{
				/*@editable*/ color:#7397C3 !important;
				/*@editable*/ font-weight:normal;
				/*@editable*/ text-decoration:underline;
			}

			/**
			* @tab Columns
			* @section right column text
			*/
			.rightColumnContent{
				/*@editable*/ color:#666666;
				/*@editable*/ font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:14px;
				/*@editable*/ line-height:150%;
				padding-top:0;
				padding-right:10px;
				padding-bottom:10px;
				padding-left:10px;
				/*@editable*/ text-align:left;
			}

			/**
			* @tab Columns
			* @section right column link
			*/
			.rightColumnContent a:link, .rightColumnContent a:visited, /* Yahoo! Mail Override */ .rightColumnContent a .yshortcuts /* Yahoo! Mail Override */{
				/*@editable*/ color:#7397C3 !important;
				/*@editable*/ font-weight:normal;
				/*@editable*/ text-decoration:underline;
			}

			.leftColumnContent img, .rightColumnContent img{
				display:inline;
				height:auto;
				max-width:260px;
			}
		
			

			/**
			* @tab Colored Box
			* @section ColoredBox style
			* @theme footer
			*/
			#templateColorBox{
				
				/*@editable*/ /*border-top:0px solid #FAFAF7;*/
				/*@editable*/ /*border-bottom:0px solid #DEDEDE;*/
			}

			/**
			* @tab Colored Box
			* @section colored text
			* @theme footer
			*/
			.ColorContent{
				/*@editable*/ color:#FFF;
				/*@editable*/ font-family: Arial, Helvetica, sans-serif;
				/*@editable*/ font-size:11px;
				/*@editable*/ line-height:150%;
				padding-top:20px;				
				padding-bottom:20px;
				/*@editable*/ text-align:left;
			}
			.ColorContent h1 { color:#FFF !important;}
			.ColorContent h2 { color:#FFF !important;}
			.ColorContent h3 { color:#FFF !important;}
			.ColorContent h4 { color:#FFF !important;}
			.ColorContent h5 { color:#FFF !important;}
			

			/* ======== Copyright Styles ======== */
	
			.copyright img {
    		display: inline;
    		height: auto;
   			max-width: 110px !important;
			}
				

			/*  MOBILE STYLES  */

            @media only screen and (max-width: 480px){
				/* \\\/ CLIENT-SPECIFIC MOBILE STYLES \\\/ */
				body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */
                body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */

				/* \\\/ MOBILE RESET STYLES \\\/ */
				*[id]#bodyCell{padding:10px !important;}
				*[id]#bodyCellFooter{padding:10px !important;}

				/* \\\/ MOBILE TEMPLATE STYLES \\\/ */
				
				*[id]#bodyImage {
    			height: auto !important;
    			max-width: 580px !important;
    			width: 100% !important;
				}

				/* ======== Page Styles ======== */

				/**
				* @tab Mobile Styles
				* @section template width
				*/
				*[id]#templateContainer{
					max-width:600px !important;
					/*@editable*/ width:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section heading 1
				* @tip Make the first-level headings larger in size for better readability on small screens.
				*/
				h1{
					/*@editable*/ font-size:27px !important;
					/*@editable*/ line-height:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section heading 2
				* @tip Make the second-level headings larger in size for better readability on small screens.
				*/
				h2{
					/*@editable*/ font-size:20px !important;
					/*@editable*/ line-height:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section heading 3
				* @tip Make the third-level headings larger in size for better readability on small screens.
				*/
				h3{
					/*@editable*/ font-size:18px !important;
					/*@editable*/ line-height:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section heading 4
				* @tip Make the fourth-level headings larger in size for better readability on small screens.
				*/
				h4{
					/*@editable*/ font-size:16px !important;
					/*@editable*/ line-height:100% !important;
				}

				/* ======== Header Styles ======== */

				*[id]#templatePreheader{display:none !important;} /* Hide the template preheader to save space */

				/**
				* @tab Mobile Styles
				* @section header image
				*/
				*[id]#headerImage{
					height:auto !important;
					/*@editable*/ max-width:600px !important;
					/*@editable*/ width:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section header text
				* @tip Make the header content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				*/
				*[class].headerContent{
					/*@editable*/ font-size:20px !important;
					/*@editable*/ line-height:125% !important;
				}

				/* ======== Body Styles ======== */

				/**
				* @tab Mobile Styles
				* @section body text
				* @tip Make the body content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				*/
				*[class].bodyContent{
					/*@editable*/ font-size:15px !important;
					/*@editable*/ line-height:125% !important;
				}

				/* ======== Column Styles ======== */

				*[class].templateColumnContainer{display:inline-block !important; width:100% !important; padding-left:0px !important; padding-right:0px !important; }
				*[class].templateColumnContainer200{display:inline-block !important; width:100% !important; padding-left:0px !important; padding-right:0px !important; }
				*[class].templateColumnContainer300{display:inline-block !important; width:100% !important; padding-left:0px !important; padding-right:0px !important; }
				*[class].templateColumnContainer400{display:inline-block !important; width:100% !important; padding-left:0px !important; padding-right:0px !important; }
				*[class].templateColumnContainer500{display:inline-block !important; width:100% !important; padding-left:0px !important; padding-right:0px !important; }
				*[class].templateColumnContainer600{display:inline-block !important; width:100% !important; padding-left:0px !important; padding-right:0px !important; }

				*[class].columnImage{
					height:auto !important;
					/*@editable*/ max-width:480px !important;
					/*@editable*/ width:100% !important;
				}

				/**
				* @tab Mobile Styles
				* @section left column text
				* @tip Make the left column content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				*/
				*[class].leftColumnContent{
					/*@editable*/ font-size:15px !important;
					/*@editable*/ line-height:125% !important;
				}

				/**
				* @tab Mobile Styles
				* @section center column text
				* @tip Make the center column content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				*/
				*[class].centerColumnContent{
					/*@editable*/ font-size:15px !important;
					/*@editable*/ line-height:125% !important;
				}

				/**
				* @tab Mobile Styles
				* @section right column text
				* @tip Make the right column content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				*/
				*[class].rightColumnContent{
					/*@editable*/ font-size:15px !important;
					/*@editable*/ line-height:125% !important;
				}

				/* ======== Footer Styles ======== */

				/**
				* @tab Mobile Styles
				* @section footer text
				* @tip Make the body content text larger in size for better readability on small screens.
				*/
				*[class].footerContent{
					/*@editable*/ font-size:14px !important;
					/*@editable*/ line-height:115% !important;
				}

				*[class].footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */				
				*[id]#preview { display:none; } /* Hide the template Heading Image to save space */
				*[class].bodyCellFooterFirst { display:none; } /* Hide the template Footer to save space */
				*[class].bodyCellFooterSecond { border-top:1px solid #ECECEA;}
				*[id]#bodyCellTop {/* display:none; */ } /* Save place */
				*[class].bg { padding-left:0px; padding-right:0px;}
				*[class].disable { display:none !important; } /* Fast Fix */

			}
		</style>
        
    </head>
	<!--<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">-->
	<body marginheight="0" marginwidth="0" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" offset="0" style="padding:0px;">
    	<center>
        	<table id="bodyTable" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" bgcolor="#FAFAFA" style="padding:0px;">
            <tr>
            <td valign="top">
            <table align="center" width="100%">
            
            	<!-- BEGIN GREETING // -->
                <tr>
               	  <td align="center" valign="top" id="bodyCellTop" style="background-color:#1F1F1F;">
                    	<table width="600" border="0" cellpadding="0" cellspacing="0" id="templateContainer" style=" max-width:600px;" >
                        	<tr>
                              	<td class="topbar topbar-greeting" valign="top" width="600" height="25" style="text-align:center; color: #ffffff; font-family:Georgia, "Times New Roman", Times, serif; font-size: 12px; line-height: 120%; vertical-align:middle; font-style:italic; padding-top:5px; padding-bottom:5px;" mc:edit="topbar_greeting_center">
                                		<singleline label="topbar_greeting_center">
                        						Hola *|FNAME|*. *|HTEXTO|*. 
                                        </singleline>
                        		</td>
                            <tr>
                         </table>
                    </td>
                </tr>
                <!-- END GREETING // -->
            
            	<!-- BEGIN TEMPLATE LOGO BOX // -->
                <tr>
               	  <td align="center" valign="top" id="bodyCellTop" style="font-size:10px; line-height:125%; font-family: Arial,Helvetica,sans-serif; background-color:#ffffff; border-top:3px solid #7397C3;">
                    	<table width="600" border="0" cellpadding="0" cellspacing="0" id="templateContainer" style=" max-width:600px;" >
                        	<tr>
                            	<td class="topbar topbar-center" valign="top" width="600" height="70" style="line-height: 125%; text-align:center; padding-top:15px; padding-bottom:15px;">
                                
                                		<img src="http://www.platosexpress.com/PHPMailer/images/logo.svg" width="400" height="246" class="columnImage" style="width:200px !important; height:120x;" editable mc:label="logo_image" mc:edit="logo_image" />
                                </td>
                              	
                            <tr>
                         </table>
                    </td>
                </tr>
                <tr>
               	  <td align="center" valign="top" id="bodyCellTop2" width="100%" height="35" bgcolor="#FFFFFF" style="background-color:#FFFFFF !important; padding:0px;">
                    	
                    	<table border="0" cellpadding="0" cellspacing="0" id="templateContainer" style="border:0px; width:600px;" >
                        	<tr class="menu">
                            	<td class="menu-links" height="35" valign="middle" align="left" bgcolor="#FFFFFF" style="text-align:left !important; "> 
                      				<table border="0" cellpadding="0" cellspacing="0" align="center" >
                                    	<tr>                                            
                                        	<td width="80" height="35" align="center" valign="middle" mc:edit="top_menu_1">
												<a style="font-family: Arial,Helvetica,sans-serif; font-weight: bold; line-height: 100%; font-size: 14px; color: #383838 !important; text-decoration:none; text-transform: uppercase;" href="#"  >
                                                <font color="#383838">
                                                	<singleline label="Menu One">*|TITULO|*</singleline>
                                                </font></a></td>
                                            
                                        </tr>
                                    </table></td>
                            </tr>
                         </table>
                    </td>
                </tr>         
                <!-- END TEMPLATE LOGO BOX // -->
                
                <!-- BEGIN TEMPLATE HEADING IMAGE - Full 100% Width // -->
                <tr class="heading">
                	<td align="center" valign="top" id="preview" bgcolor="#FFFFFF" style="background-color:#FFFFFF; padding:0px;">
                    	<table cellpadding="0" cellspacing="0" border="0" height="250" width="600">
  							<tr>
    							<td bgcolor="#ffffff" width="600" height="250" valign="top" style="padding-top:10px; padding-bottom:10px;">
                                <img editable width="1280" height="960" src="http://www.platosexpress.com/PHPMailer/images/main_image.jpg" style="max-width:600px; display:block;" class="columnImage" mc:label="header_image" mc:edit="header_image" />
                                
								</td>
  							</tr>
						</table>
                    </td>
                </tr>
				<!-- END TEMPLATE HEADING IMAGE - Full 100% Width // -->
                
                <tr >
                	<td align="center" valign="top" id="bodyCell" bgcolor="#FFFFFF" style=" background-color:#FFFFFF; font-family: Arial, Helvetica, sans-serif; color:#505050; font-size:14px;">
                    	<table border="0" cellpadding="0" cellspacing="0" id="templateContainer" style="width:600px; border-collapse:collapse;">
                        
                            <!-- // Start Line with the Title  -->
                            <tr class="titleline">
                            	<td align="left" class="bodyContent10px" valign="middle" width="100%" height="21" style=" padding:10px; padding-top:30px; padding-bottom:0px;">
                                	<table border="0" cellpadding="0" cellspacing="0" width="100%" height="1">
                                    	<tr>
                                        	<td valign="top" mc:edit="new_products_2_columns" style="width:100%; padding-bottom:3px; color: #383838; font-size: 20px; font-style: italic; font-weight:normal; font-family:Georgia, "Times New Roman", Times, serif; border-bottom:1px solid #ECECEA; text-align:center;">
	                                            
	                                              <singleline label="New Products">*|TEXTO2|*</singleline></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <!-- // End Line with the Title  -->
                            
                            <!-- BEGIN Text 580px // -->
                        	<repeater>	
                            <tr class="content_msg">
                            	<td align="center" valign="top" style="padding-bottom:20px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateBody">
                                        <tr mc:repeatable>
                                            <td valign="top" class="bodyContent" style="padding-top:30px; padding-left:10px; padding-right:10px; padding-bottom:20px; text-align:center; font-style:italic;" mc:edit="slogan_one"><singleline label="Slogan One">*|PREG|*</singleline></td>
                                        </tr>
                                    </table>
                                    <!-- START BUTTON Shop Now // -->
                                    <table id="button" align="center" width="100" cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;">
                                    	<tbody>
                                        	<tr>
                                            	<td valign="middle" bgcolor="#7397C3" align="center" height="25" style="border-collapse: collapse;" mc:edit="shop_now">
                                                	<a style="color: #ffffff !important;text-decoration: none;outline: none; font-size:12px;" href="#">
                                                    <font color="#FFFFFF" face="Arial, Helvetica, sans-serif"> 
                                                    <singleline label="Shop Now">Shop Here</singleline>
                                                    </font>
                                                    </a>
                                                </td>
                                             </tr>                    
                                         </tbody>
                                 	</table>
  								 <!-- END BUTTON Shop Now // -->
                                </td>
                            </tr>
                            </repeater>
                            <!-- // END Text 580px  -->

                            <!-- BEGIN 2 COLUMNS - Picture Right  // -->
                        	<repeater>
                            <tr class="2columns">
                            	<td align="center" valign="top">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateColumns">
                                    	<tr mc:repeatable>
                                        	<td align="center" valign="top" class="templateColumnContainer300" style="width:300px;">
                                            	<table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                	<tr>
                                                    	<td valign="top" class="leftColumnContent" style="text-align:left; padding:10px !important; font-size:14px; line-height: 150%;" mc:edit="left_column_content_p">
                                                            <h1 style="color: #383838; font-family:Georgia, \"Times New Roman\", Times, serif; font-size: 18px; font-style: normal; font-weight: 100;
    letter-spacing: normal; line-height: 100%; margin-bottom:5px; ">
                                                                                                                         
                                                    </tr>
                                                </table>

                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            </repeater>
                            <!-- // END 2 COLUMNS - Picture Left -->
                            
                            <!-- BEGIN Text 580px // -->
                        		
                            <tr class="content_msg">
                            	<td align="center" valign="top" style="padding-bottom:20px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateBody">
                                     
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- // END Text 580px  -->
                          
                        </table>
                    </td> 
              </tr>              
              
              <!-- BEGIN 3 COLUMNS FOOTER - JOP // -->
              <tr>		                              
              	<td id="bodyCellFooter" valign="top" class="bodyCellFooterFirst" align="center" style="background-color:#1F1F1F; border-top:3px solid #7397C3; font-family: Arial, Helvetica, sans-serif;">
                	<table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style=" max-width:600px;">
                    	<tr>
                        	<td align="center" valign="top" class="templateColumnContainer200" style="padding-top:20px;">
                            	<table border="0" cellpadding="0" cellspacing="0" width="100%">
                                	<tr>
                                    	<td class="copyright" style="padding-top:8px; padding-bottom:0px; padding-left:10px;"><img editable width="90" src="http://www.platosexpress.com/PHPMailer/images/logo.svg" style="width:90px !important;" class="columnImage" mc:label="logo_image" mc:edit="logo_image_footer" /></td>
                                    </tr>
                                    <tr>
                                       	<td valign="top" class="copyright" id="copyright" style="font-size:9px; line-height: 150%; padding-bottom: 10px; 
padding-left: 10px; padding-right: 20px; padding-top: 10px; text-align: left; color:#b2b2b2; font-family: Arial,Helvetica,sans-serif;" mc:edit="copyright">
                                                        <multiline label="Copyright">                                                   	

															© 2016 YOUR COMPANY, INC.
															<br />
                                                            ALL RIGHTS RESERVED.</multiline>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <!-- begin second box -->
                            <td align="center" valign="top" class="templateColumnContainer200" style="padding-top:20px;">
                            	<table border="0" cellpadding="0" cellspacing="0" width="100%">
                                	<tr>
                                    	<td valign="top" class="centerColumnFooterContent" align="left" style="line-height: 190%; padding:20px; padding-top:10px; text-align:left;" mc:edit="center_column_content">
                                                            <h3 style="padding-bottom:10px; font-size:17px; color:#e5e5e5 !important; display:inline-block; margin-bottom:0px; font-style: italic; font-weight: normal;"><singleline label="h3">Customer Service</singleline></h3>
                                                            <table width="100%" border="0" cellspacing="0">
  <tr>
    <td height="32"><a style="color:#b2b2b2; text-decoration:none; font-size:13px; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="About">About</singleline></a></td>
  </tr>
  <tr>
    <td height="32"><a style="color:#b2b2b2; text-decoration:none; font-size:13px; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="Shipping">Shipping & Tax</singleline></a></td>
  </tr>
  <tr>
    <td height="32"><a style="color:#b2b2b2; text-decoration:none; font-size:13px; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="Return">Return Policy</singleline></a></td>
  </tr>
  <tr>
    <td height="32"><a style="color:#b2b2b2; text-decoration:none; font-size:13px; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="Terms">Terms Of Service</singleline></a></td>
  </tr>
  <tr>
    <td height="32"><a style="color:#b2b2b2; text-decoration:none; font-size:13px; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="Privacy">Privacy</singleline></a></td>
  </tr>
  
</table>	
																
                                                        </td>
                                                    </tr>
                                                </table>
                         	</td>
                            <!-- begin 3 box -->
                            <td align="center" valign="top" class="templateColumnContainer200" style="padding-top:20px;">
                            	<table border="0" cellpadding="0" cellspacing="0" width="100%">
                                	<tr>
                                    	<td valign="top" class="rightColumnFooterContent" align="left" style="line-height: 190%; padding:20px; padding-top:10px; text-align:left;" mc:edit="right_column_content">
                                                            <h3 style="padding-bottom:10px; font-size:17px; color:#e5e5e5 !important; display:inline-block; margin-bottom:0px; font-style: italic; font-weight: normal;"><singleline label="h3">Connect with</singleline></h3>
                                                            <table width="100%" border="0" cellspacing="0">
  <tr>
    <td width="32"><img style="padding-right:10px;" src="http://www.platosexpress.com/PHPMailer/images/facebook.png" mc:label="fb" mc:edit="fb"/></td>
    <td><a style="font-size:13px; color:#b2b2b2; text-decoration:none; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="Facebook">Facebook</singleline></a></td>
  </tr>
  <tr>
    <td width="32"><img style="padding-right:10px;" src="http://www.platosexpress.com/PHPMailer/images/google.png" mc:label="google" mc:edit="google"/></td>
    <td><a style="font-size:13px; color:#b2b2b2; text-decoration:none; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="Google">Google +</singleline></a></td>
  </tr>
  <tr>
    <td width="32"><img style="padding-right:10px;" src="http://www.platosexpress.com/PHPMailer/images/twitter.png" mc:label="twitter" mc:edit="twitter"/></td>
    <td><a style="font-size:13px; color:#b2b2b2; text-decoration:none; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="Twitter">Twitter</singleline></a></td>
  </tr>
  <tr>
    <td width="32"><img style="padding-right:10px;" src="http://www.platosexpress.com/PHPMailer/images/rss.png" mc:label="rss" mc:edit="rss"/></td>
    <td><a style="font-size:13px; color:#b2b2b2; text-decoration:none; font-family: Arial,Helvetica,sans-serif;" href="#" ><singleline label="RSS">RSS</singleline></a></td>
  </tr>
</table>
                                                              
                                                        </td>
                                                    </tr>
                                                </table>
                             </td>
                             <!-- end 3 box -->
                          </tr>
                 		</table>
              		</td>
              </tr>
			  <!-- begin footer dark part -->
              <tr>
              	<td id="bodyCellFooter" valign="top" class="bodyCellFooterSecond" align="center" style="background-color:#1F1F1F; ">
                	<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="max-width:600px;">
                    	<tr>
                        	<td valign="top" class="footerContent2" style="text-align:left; padding:10px; color:#b2b2b2; font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:150%;" mc:edit="footer_content02">
                                                 <multiline label="Unsubscribe">  
                                                 You re receiving this newsletter because you signed up at <a style="color: #e5e5e5; text-decoration:none;" href="http://yourwebsite.com" > yourwebsite.com</a></multiline><br/>
                                            	<a style="color: #e5e5e5;" href="*|UNSUB|*">unsubscribe from this list MC</a>&nbsp;&nbsp;&nbsp;
                                                
                                                <span style="color: #e5e5e5; text-decoration:underline;"><unsubscribe>unsubscribe from this list CM</unsubscribe></span>
                                              <!-- <a style="color: #888888;" href="*|UPDATE_PROFILE|*"><preferences>update subscription preferences</preferences></a>  -->
                             </td>
                         </tr>
					 </table>
                  </td>
              </tr>
              <!-- end footer dark part -->
            </table>
            </td>
            </tr>
           </table>
        </center>
    </body>
</html>';

?>