TCEFORM {
	tt_content {
		layout.disabled = 0
	}
	pages {
		layout.disabled = 1
		newUntil.disabled = 1
		backend_layout.label = Layout für aktuelle Seite
		backend_layout_next_level.disabled = 1
	}
}

TCEMAIN {
}

TCAdefaults {
}
# RTE configuration
RTE.default {
}

RTE.config.tt_content.bodytext.proc.allowedClasses < RTE.default.proc.allowedClasses

RTE.classes {
}

#frames for columns
TCEFORM.tt_content.section_frame {
}

# Alternatives Seitenlayout
#[globalVar = TSFE:page|layout = 0]
#	file = EXT:tmpl_ipoa/Resources/Private/Templates/Templates/Start.html
#	page.10.template.file = EXT:tmpl_ipoa/Resources/Private/Templates/Start.html
#[global]
