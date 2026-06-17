' =============================================
' Procurement Dashboard - Update Macro
' Assigned to button at cell E6 on "Procurement Dashboard" sheet
' =============================================

Sub UpdateDashboard()

    Dim wsDash As Worksheet
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim dashRow As Long
    Dim i As Long
    Dim clientRef As String
    Dim typeVal As String

    ' Sheets to skip
    Dim skipSheets As Variant
    skipSheets = Array("Procurement Dashboard", "Template")

    Application.ScreenUpdating = False

    Set wsDash = ThisWorkbook.Sheets("Procurement Dashboard")

    ' Clear only cols B:J from row 13 downwards (leave manual entries in K+ intact)
    Dim lastDashRow As Long
    lastDashRow = wsDash.Cells(wsDash.Rows.Count, "B").End(xlUp).Row
    If lastDashRow >= 13 Then
        wsDash.Range("B13:J" & lastDashRow).ClearContents
    End If

    dashRow = 13

    ' Loop through each sheet
    For Each ws In ThisWorkbook.Worksheets

        ' Skip dashboard and template sheets
        Dim skip As Boolean
        skip = False
        Dim s As Variant
        For Each s In skipSheets
            If ws.Name = s Then
                skip = True
                Exit For
            End If
        Next s
        If skip Then GoTo NextSheet

        ' Get client ref from B6
        clientRef = ws.Range("B6").Value

        ' Find last row of data in col B (from row 13)
        lastRow = ws.Cells(ws.Rows.Count, "B").End(xlUp).Row
        If lastRow < 13 Then GoTo NextSheet

        ' Loop through data rows
        For i = 13 To lastRow
            typeVal = Trim(ws.Cells(i, "B").Value)

            If LCase(typeVal) = "order" Then
                ' Dashboard col B = Client ref (from B6)
                wsDash.Cells(dashRow, "B").Value = clientRef
                ' Dashboard col C = ID (project col C)
                wsDash.Cells(dashRow, "C").Value = ws.Cells(i, "C").Value
                ' Dashboard col D = Item Description (project col D)
                wsDash.Cells(dashRow, "D").Value = ws.Cells(i, "D").Value
                ' Dashboard col E = Category (project col E)
                wsDash.Cells(dashRow, "E").Value = ws.Cells(i, "E").Value
                ' Dashboard col F = Supplier (project col F)
                wsDash.Cells(dashRow, "F").Value = ws.Cells(i, "F").Value
                ' Dashboard col G = Ref No (project col G)
                wsDash.Cells(dashRow, "G").Value = ws.Cells(i, "G").Value
                ' Dashboard col H = Lead Time (project col H)
                wsDash.Cells(dashRow, "H").Value = ws.Cells(i, "H").Value
                ' Dashboard col I = Est. Cost (project col I)
                wsDash.Cells(dashRow, "I").Value = ws.Cells(i, "I").Value
                ' Dashboard col J = Link to Proforma (project col L)
                wsDash.Cells(dashRow, "J").Value = ws.Cells(i, "L").Value
                dashRow = dashRow + 1
            End If
        Next i

NextSheet:
    Next ws

    ' Format Est. Cost column
    If dashRow > 13 Then
        wsDash.Range("I13:I" & (dashRow - 1)).NumberFormat = "£#,##0.00"
    End If

    Application.ScreenUpdating = True

    MsgBox "Dashboard updated! " & (dashRow - 13) & " orders pulled across.", vbInformation, "Procurement Dashboard"

End Sub
