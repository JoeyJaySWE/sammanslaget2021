using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.UIElements;

public class ButtonScript : MonoBehaviour
{
    GameObject[] buttons;
    Transform[] knappar;
    
    void Start()
    {
        knappar = GetComponentsInChildren<Transform>();
    }

    void Update()
    {
        
    }

    public void TurnOffButton()
    {
        for (int i = 0; i < knappar.Length; i++)
        {
            Debug.Log("Det finns " + i + " knappar");
        }

        knappar[0].gameObject.SetActive(false);
    }
}
