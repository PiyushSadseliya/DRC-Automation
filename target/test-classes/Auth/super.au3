WinWait("103.249.120.58:8037/External/ExternalLogin","","60")
If WinExists("103.249.120.58:8037/External/ExternalLogin","") Then
WinActivate("103.249.120.58:8037/External/ExternalLogin")
Send("pooja.parmar{TAB}")
WinActivate("103.249.120.58:8037/External/ExternalLogin")
Send("admin{ENTER}")
EndIf
