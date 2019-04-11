WinWait("103.249.120.58:90/External/ExternalLogin","","60")
If WinExists("103.249.120.58:90/External/ExternalLogin","") Then
WinActivate("103.249.120.58:90/External/ExternalLogin")
Send("rohit.patil{TAB}")
WinActivate("103.249.120.58:90/External/ExternalLogin")
Send("admin{ENTER}")
EndIf
