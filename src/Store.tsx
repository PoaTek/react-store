import React, { createContext, useState, useContext, useEffect } from 'react'

type Shell<S> = { state: S }

class Store<S> {
	private shell: Shell<S>
	private context: React.Context<Shell<S>>
	private setShell = (() => undefined) as (shell: Shell<S>) => void
	private mounted = false

	constructor(private initial: S) {
		this.shell = { state: this.initial }
		this.context = createContext<Shell<S>>(this.shell)
	}

	getState = () => this.shell.state

	notify = () => {
		if (this.mounted) this.setShell({ state: this.shell.state })
	}

	listen = () => useContext(this.context).state

	reset = () => this.setShell({ state: this.initial })

	Provider = (props: { children: JSX.Element | JSX.Element[] }) => {
		;[this.shell, this.setShell] = useState(this.shell)

		useEffect(() => {
			this.mounted = true
			return () => {
				this.mounted = false
			}
		}, [])

		return (
			<this.context.Provider value={this.shell}>
				{props.children}
			</this.context.Provider>
		)
	}
}

export default Store
