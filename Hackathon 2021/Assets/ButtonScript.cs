using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class ButtonScript : MonoBehaviour
{
    Button[] buttons;
    Transform[] knappar;
    
    void Start()
    {
/*        buttons = FindObjectsOfType<Button>();

        gameObje*/

        knappar = GetComponentsInChildren<Transform>();
    }

    void Update()
    {
        
    }

    public void TurnOffButton()
    {
        for (int i = 0; i < knappar.Length; i++)
        {
            print("Det finns " + i + " knappar");
        }

        knappar[0].gameObject.SetActive(false);
    }
}
