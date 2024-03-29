/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

'use strict';

// MODULES //

var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var cos = require( '@stdlib/math-base-special-cos' );
var sin = require( '@stdlib/math-base-special-sin' );
var ln = require( '@stdlib/math-base-special-ln' );
var HALF_PI = require( '@stdlib/constants-float64-half-pi' );
var GAMMA = require( '@stdlib/constants-float64-eulergamma' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var polyvalFN4 = require( './polyval_fn4.js' );
var polyvalFD4 = require( './polyval_fd4.js' );
var polyvalFN8 = require( './polyval_fn8.js' );
var polyvalFD8 = require( './polyval_fd8.js' );
var polyvalGN4 = require( './polyval_gn4.js' );
var polyvalGD4 = require( './polyval_gd4.js' );
var polyvalGN8 = require( './polyval_gn8.js' );
var polyvalGD8 = require( './polyval_gd8.js' );
var polyvalSN = require( './polyval_sn.js' );
var polyvalSD = require( './polyval_sd.js' );
var polyvalCN = require( './polyval_cn.js' );
var polyvalCD = require( './polyval_cd.js' );


// MAIN //

/**
* Computes the sine and cosine integrals and assigns results to a provided output array.
*
* ## Method
*
* -   The integrals are approximated by rational functions.
*
* -   For \\( x > 8 \\), auxiliary functions \\( f(x) \\) and \\( g(x) \\) are employed such that
*
*     ```tex
*     \operatorname{Ci}(x) = f(x) \sin(x) - g(x) \cos(x) \\
*     \operatorname{Si}(x) = \pi/2 - f(x) \cos(x) - g(x) \sin(x)
*     ```
*
* ## Notes
*
* -   Absolute error on test interval \\( \[0,50\] \\), except relative when greater than \\( 1 \\):
*
*     | arithmetic | function    | # trials | peak    | rms     |
*     |:----------:|:-----------:|:--------:|:-------:|:-------:|
*     | IEEE       | Si          | 30000    | 4.4e-16 | 7.3e-17 |
*     | IEEE       | Ci          | 30000    | 6.9e-16 | 5.1e-17 |
*
* @private
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var v = sici( 3.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~1.849, ~0.12 ]
*
* @example
* var v = sici( 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ 0.0, -Infinity  ]
*
* @example
* var v = sici( -9.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~-1.665, ~0.055 ]
*
* @example
* var v = sici( NaN, [ 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, NaN ]
*/
function sici( x, out, stride, offset ) {
	var sgn;
	var si;
	var ci;
	var c;
	var f;
	var g;
	var s;
	var z;

	if ( isnan( x ) ) {
		out[ offset ] = NaN;
		out[ offset + stride ] = NaN;
		return out;
	}
	if ( x < 0.0 ) {
		sgn = -1;
		x = -x;
	} else {
		sgn = 0;
	}
	if ( x === 0.0 ) {
		out[ offset ] = 0.0;
		out[ offset + stride ] = NINF;
		return out;
	}
	if ( x > 1.0e9 ) {
		if ( isInfinite( x ) ) {
			if ( sgn === -1 ) {
				si = -HALF_PI;
				ci = NaN;
			} else {
				si = HALF_PI;
				ci = 0.0;
			}
			out[ offset ] = si;
			out[ offset + stride ] = ci;
			return out;
		}
		si = HALF_PI - ( cos( x ) / x );
		ci = sin( x ) / x;
	}
	if ( x > 4.0 ) {
		s = sin( x );
		c = cos( x );
		z = 1.0 / ( x*x );
		if ( x < 8.0 ) {
			f = polyvalFN4( z ) / ( x * polyvalFD4( z ) );
			g = z * polyvalGN4( z ) / polyvalGD4( z );
		} else {
			f = polyvalFN8( z ) / ( x * polyvalFD8( z ) );
			g = z * polyvalGN8( z ) / polyvalGD8( z );
		}
		si = HALF_PI - ( f*c ) - ( g*s );
		if ( sgn ) {
			si = -si;
		}
		ci = ( f*s ) - ( g*c );
		out[ offset ] = si;
		out[ offset + stride ] = ci;
		return out;
	}
	z = x * x;
	s = x * polyvalSN( z ) / polyvalSD( z );
	c = z * polyvalCN( z ) / polyvalCD( z );
	if ( sgn ) {
		s = -s;
	}
	si = s;
	ci = GAMMA + ln( x ) + c; // real part if x < 0
	out[ offset ] = si;
	out[ offset + stride ] = ci;
	return out;
}


// EXPORTS //

module.exports = sici;
