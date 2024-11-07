package gui

import (
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
	"os/exec"
)

func RunGUI() {
	a := app.New()
	w := a.NewWindow("Fabric Patterns")

	patterns := []string{"Pattern 1", "Pattern 2", "Pattern 3"}
	patternList := widget.NewList(
		func() int {
			return len(patterns)
		},
		func() fyne.CanvasObject {
			return widget.NewLabel("template")
		},
		func(i widget.ListItemID, o fyne.CanvasObject) {
			o.(*widget.Label).SetText(patterns[i])
		},
	)

	runButton := widget.NewButton("Run Pattern", func() {
		selectedPattern := patterns[patternList.Selected]
		cmd := exec.Command("fabric", "--pattern", selectedPattern)
		err := cmd.Run()
		if err != nil {
			widget.NewLabel("Error running pattern: " + err.Error())
		}
	})

	content := container.NewVBox(patternList, runButton)
	w.SetContent(content)
	w.ShowAndRun()
}
